'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var axios = require('axios');
var Buffer = require('buffer/').Buffer;

var constants = require('./constants');
var endpoints = require('./endpoints');
var apis = require('./apis');

var _require = require('./utils'),
    createAxiosError = _require.createAxiosError;

var EnerTalkAPIClient = function (_axios$Axios) {
  _inherits(EnerTalkAPIClient, _axios$Axios);

  _createClass(EnerTalkAPIClient, null, [{
    key: 'transformToAxiosConfig',
    value: function transformToAxiosConfig(config, options) {
      var authConfig = config;
      var axiosOptions = options;

      if (!authConfig || (typeof authConfig === 'undefined' ? 'undefined' : _typeof(authConfig)) !== 'object') {
        authConfig = {};
      }

      if (!axiosOptions || (typeof axiosOptions === 'undefined' ? 'undefined' : _typeof(axiosOptions)) !== 'object') {
        axiosOptions = {};
      }

      return Object.assign({
        baseURL: axiosOptions.baseURL || constants.resourceDomain,
        headers: {
          Authorization: 'Bearer ' + authConfig.accessToken
        }
      }, axiosOptions);
    }
  }]);

  function EnerTalkAPIClient(authConfig, options, categories) {
    _classCallCheck(this, EnerTalkAPIClient);

    var axiosConfig = EnerTalkAPIClient.transformToAxiosConfig(authConfig, options);

    var _this = _possibleConstructorReturn(this, (EnerTalkAPIClient.__proto__ || Object.getPrototypeOf(EnerTalkAPIClient)).call(this, axiosConfig));

    _this.authConfig = Object.assign({
      domain: constants.authDomain
    }, authConfig);
    _this.axiosConfig = axiosConfig;
    _this.tokenRefreshing = false;

    _this.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      var failedRequestConfig = error.config;
      var data = error.response.data;
      var tokenExpired = data.code === 401 && data.type === 'UnauthorizedError';
      var hasRefreshConfig = _this.authConfig.refreshToken && _this.authConfig.clientId && _this.authConfig.clientSecret;

      if (_this.tokenRefreshing) {
        return _this.waitUntilRefresh().then(function () {
          return _this.retryFailedRequest(failedRequestConfig);
        });
      }

      if (tokenExpired && hasRefreshConfig) {
        _this.tokenRefreshing = true;

        return _this.issueNewAccessToken().then(function (tokenObject) {
          return _this.updateToken(tokenObject);
        }).then(function (tokenObject) {
          return _this.syncWithCaller(tokenObject);
        }).then(function () {
          return _this.retryFailedRequest(failedRequestConfig);
        });
      }

      return Promise.reject(error);
    });

    if (options instanceof Array) {
      categories = options;
    }

    if (typeof options === 'string') {
      categories = [options];
    }

    if (!categories) {
      categories = Object.keys(apis);
    }

    _this.attachAPIs(categories);
    return _this;
  }

  _createClass(EnerTalkAPIClient, [{
    key: 'attachAPIs',
    value: function attachAPIs(categories) {
      var _this2 = this;

      categories.forEach(function (key) {
        var apisByCategory = apis[key];

        if (!apisByCategory) {
          return null;
        }

        Object.keys(apisByCategory).forEach(function (methodName) {
          _this2[methodName] = apisByCategory[methodName].bind(_this2);
        });
      });
    }
  }, {
    key: 'updateAuthConfig',
    value: function updateAuthConfig(config) {
      if (!config || (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object' || !config.accessToken) {
        throw new TypeError('Access token must be included');
      }

      this.authConfig = Object.assign(this.authConfig, config);
      this.setAuthorizationHeader(config.accessToken);
    }
  }, {
    key: 'setAuthorizationHeader',
    value: function setAuthorizationHeader(accessToken) {
      this.defaults.headers.Authorization = 'Bearer ' + accessToken;
    }
  }, {
    key: 'issueNewAccessToken',
    value: function issueNewAccessToken() {
      var basicHeader = Buffer.from(this.authConfig.clientId + ':' + this.authConfig.clientSecret).toString('base64');

      return this.post(endpoints.refreshToken, {
        grant_type: 'refresh_token',
        refresh_token: this.authConfig.refreshToken
      }, {
        baseURL: this.authConfig.domain,
        headers: {
          Authorization: 'Basic ' + basicHeader
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: 'updateToken',
    value: function updateToken(tokenObject) {
      this.authConfig.accessToken = tokenObject.access_token;
      this.authConfig.refreshToken = tokenObject.refresh_token;
      this.setAuthorizationHeader(tokenObject.access_token);
      this.tokenRefreshing = false;

      return tokenObject;
    }
  }, {
    key: 'syncWithCaller',
    value: function syncWithCaller(tokenObject) {
      if (typeof this.authConfig.tokenUpdateFn === 'function') {
        this.authConfig.tokenUpdateFn({
          accessToken: tokenObject.access_token,
          refreshToken: tokenObject.refresh_token,
          expiresIn: tokenObject.expires_in
        });
      }

      return Promise.resolve();
    }
  }, {
    key: 'retryFailedRequest',
    value: function retryFailedRequest(config) {
      var retryConfig = Object.assign(config, {
        headers: {
          Authorization: 'Bearer ' + this.authConfig.accessToken
        }
      });

      return Promise.resolve(this.request(retryConfig));
    }
  }, {
    key: 'waitUntilRefresh',
    value: function waitUntilRefresh() {
      var _this3 = this;

      var checkRefreshInterval = void 0;
      var checkCount = 1;

      return new Promise(function (resolve, reject) {
        checkRefreshInterval = setInterval(function () {
          checkCount += 1;

          if (checkCount > 5) {
            clearInterval(checkRefreshInterval);
            return reject(createAxiosError(401, 'TokenRefreshError'));
          }

          if (!_this3.tokenRefreshing) {
            clearInterval(checkRefreshInterval);
            return resolve();
          }
        }, 1000);
      });
    }
  }]);

  return EnerTalkAPIClient;
}(axios.Axios);

module.exports = EnerTalkAPIClient;