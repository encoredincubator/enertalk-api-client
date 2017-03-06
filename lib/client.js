'use strict';

const axios = require('axios');
const Buffer = require('buffer/').Buffer;

const constants = require('./constants');
const endpoints = require('./endpoints');
const apis = require('./apis');

class EnerTalkAPIClient extends axios.Axios {
  static transformToAxiosConfig(config, options) {
    let authConfig = config;
    let axiosOptions = options;

    if (!authConfig || typeof authConfig !== 'object') {
      authConfig = {};
    }

    if (!axiosOptions || typeof axiosOptions !== 'object') {
      axiosOptions = {};
    }

    return Object.assign({
      baseURL: axiosOptions.baseURL || constants.resourceDomain,
      headers: {
        Authorization: `Bearer ${authConfig.accessToken}`,
      },
    }, axiosOptions);
  }

  constructor(authConfig, options, categories) {
    const axiosConfig = EnerTalkAPIClient.transformToAxiosConfig(authConfig, options);

    super(axiosConfig);

    this.authConfig = Object.assign({
      domain: constants.authDomain,
    }, authConfig);
    this.axiosConfig = axiosConfig;
    this.tokenRefreshing = false;

    this.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      const failedRequestConfig = error.config;
      const data = error.response.data;
      const tokenExpired = data.code === 401 && data.type === 'UnauthorizedError';
      const hasRefreshConfig = this.authConfig.refreshToken &&
        this.authConfig.clientId && this.authConfig.clientSecret;

      if (this.tokenRefreshing) {
        return this.waitUntilRefresh()
          .then(() => this.retryFailedRequest(failedRequestConfig));
      }

      if (tokenExpired && hasRefreshConfig) {
        this.tokenRefreshing = true;

        return this.issueNewAccessToken()
          .then((tokenObject) => this.updateToken(tokenObject))
          .then((tokenObject) => this.syncWithCaller(tokenObject))
          .then(() => this.retryFailedRequest(failedRequestConfig));
      } else {
        return Promise.reject(error);
      }
    });

    if (options instanceof Array) {
      categories = options;
    }

    this.attachAPIs(categories);
  }

  attachAPIs(categories = Object.keys(apis)) {
    let apiInstance = {};

    if (typeof categories === 'string') {
      categories = [categories];
    }

    categories.forEach(key => {
      const apisByCategory = apis[key];

      if (!apisByCategory) {
        return null;
      }

      Object.keys(apisByCategory).forEach(methodName => {
        this[methodName] = apisByCategory[methodName].bind(this);
      });
    });
  }

  updateAuthConfig(config) {
    if (!config || typeof config !== 'object' || !config.accessToken) {
      throw new TypeError('Access token must be included');
    }

    this.authConfig = Object.assign(this.authConfig, config);
    this.setAuthorizationHeader(config.accessToken);
  }

  setAuthorizationHeader(accessToken) {
    this.defaults.headers.Authorization = `Bearer ${accessToken}`;
  }

  issueNewAccessToken() {
    const basicHeader = Buffer.from(
      `${this.authConfig.clientId}:${this.authConfig.clientSecret}`
    ).toString('base64');

    return this.post(endpoints.refreshToken, {
      grant_type: 'refresh_token',
      refresh_token: this.authConfig.refreshToken,
    }, {
      baseURL: this.authConfig.domain,
      headers: {
        Authorization: `Basic ${basicHeader}`,
      },
    }).then(response => response.data);
  }

  updateToken(tokenObject) {
    this.authConfig.accessToken = tokenObject.access_token;
    this.authConfig.refreshToken = tokenObject.refresh_token;
    this.setAuthorizationHeader(tokenObject.access_token);
    this.tokenRefreshing = false;

    return tokenObject;
  }

  syncWithCaller(tokenObject) {
    if (typeof this.authConfig.tokenUpdateFn === 'function') {
      this.authConfig.tokenUpdateFn({
        accessToken: tokenObject.access_token,
        refreshToken: tokenObject.refresh_token,
        expiresIn: tokenObject.expires_in,
      });
    }

    return Promise.resolve();
  }

  retryFailedRequest(config) {
    const retryConfig = Object.assign(config, {
      headers: {
        Authorization: `Bearer ${this.authConfig.accessToken}`,
      },
    });

    return Promise.resolve(this.request(retryConfig));
  }

  waitUntilRefresh() {
    let checkRefreshInterval;
    let checkCount = 1;

    return new Promise((resolve, reject) => {
      checkRefreshInterval = setInterval(() => {
        checkCount += 1;

        if (checkCount > 10) {
          clearInterval(checkRefreshInterval);
          return reject();
        }

        if (!this.tokenRefreshing) {
          clearInterval(checkRefreshInterval);
          return resolve();
        }
      }, 1000);
    });
  }
}

module.exports = EnerTalkAPIClient;
module.exports.default = EnerTalkAPIClient;
