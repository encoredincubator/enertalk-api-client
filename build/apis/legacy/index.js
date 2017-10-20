'use strict';

var _require = require('../../utils'),
    createAxiosError = _require.createAxiosError;

var allowedVersions = ['1.1', '1.2'];
var allowedMethods = ['get', 'post', 'put'];

function isAllowedVersion(path) {
  return allowedVersions.some(function (version) {
    return path.startsWith(version) || path.startsWith('/' + version);
  });
}

function isAllowedMethod(method) {
  return allowedMethods.some(function (allowedMethod) {
    return method === allowedMethod || method === allowedMethod.toUpperCase();
  });
}

function legacy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$path = options.path,
      path = _options$path === undefined ? '' : _options$path,
      _options$method = options.method,
      method = _options$method === undefined ? 'get' : _options$method,
      _options$data = options.data,
      data = _options$data === undefined ? {} : _options$data,
      _options$params = options.params,
      params = _options$params === undefined ? {} : _options$params;

  var requestOptions = {
    url: path,
    method: method,
    params: params,
    data: data
  };

  if (!isAllowedVersion(path)) {
    var error = createAxiosError(400, 'InvalidAPIVersion', 'The API version in path is not supported');
    return Promise.reject(error);
  }

  if (!isAllowedMethod(method)) {
    var _error = createAxiosError(405, 'MethodNotAllowed', 'The HTTP method should be one of \'get\', \'post\', \'put\'');
    return Promise.reject(_error);
  }

  return this.request(requestOptions);
}

module.exports.legacy = legacy;