const axios = require('axios');
const Buffer = require('buffer/').Buffer;

const endpoints = require('./constants').endpoints;

/*
   Configuration
   - accessToken
 */

class EnerTalkAPIClient extends axios.Axios {
  static transformToInstanceConfig(config) {
    if (!config || !config.accessToken) {
      throw new Error({
        code: 'invalidConfig',
        message: 'Access token must include during initialization.',
      });
    }

    return {
      baseURL: config.baseURL || 'https://api2-test.enertalk.com',
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        'accept-version': '2.0.0',
      },
      timeout: config.timeout || 10000,
    };
  }

  constructor(config) {
    const configObject = typeof config === 'string' ? { accessToken: config } : config;
    const instanceConfig = EnerTalkAPIClient.transformToInstanceConfig(configObject);

    super(instanceConfig);

    this.config = Object.assign({}, configObject);
    this.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      const failedRequestConfig = error.config;
      const data = error.response.data;
      const tokenExpired = data.code === 401 && data.type === 'UnauthorizedError';
      const hasRefreshConfig = this.config.refreshToken && this.config.clientId && this.config.clientSecret;

      if (tokenExpired && hasRefreshConfig) {
        return this.issueNewAccessToken()
          .then((tokenObject) => this.updateToken(tokenObject))
          .then(() => this.retryFailedRequest(failedRequestConfig));
      }

      return Promise.reject(error);
    });
  }

  issueNewAccessToken() {
    const basicHeader = Buffer.from(`${this.config.clientId}:${this.config.clientSecret}`).toString('base64');
    return this.post(endpoints.refreshToken, {
      grant_type: 'refresh_token',
      refresh_token: this.config.refreshToken,
    }, {
      headers: {
        Authorization: `Basic ${basicHeader}`,
      },
    }).then(response => response.data);
  }

  updateToken(tokenObject) {
    this.config.accessToken = tokenObject.access_token;
    this.config.refreshToken = tokenObject.refresh_token;
    this.defaults.headers.Authorization = `${tokenObject.access_token}`;
    return Promise.resolve();
  }

  retryFailedRequest(config) {
    const retryConfig = Object.assign(config, {
      headers: {
        Authorization: `Bearer ${this.config.accessToken}`,
      },
    });

    return Promise.resolve(this.request(retryConfig));
  }

  getUser() {
    return this.get(endpoints.getUser);
  }
}

module.exports = EnerTalkAPIClient;
