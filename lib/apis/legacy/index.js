const { createAxiosError } = require('../../utils');

const allowedVersions = ['1.1', '1.2'];
const allowedMethods = ['get', 'post', 'put'];

function isAllowedVersion(path) {
  return allowedVersions.some(version => path.startsWith(version) || path.startsWith(`/${version}`));
}

function isAllowedMethod(method) {
  return allowedMethods.some(allowedMethod => method === allowedMethod || method === allowedMethod.toUpperCase());
}

function legacy(options = {}) {
  const {
    path = '',
    method = 'get',
    data = {},
    params = {},
  } = options;
  const requestOptions = {
    url: path,
    method,
    params,
    data,
  }

  if (!isAllowedVersion(path)) {
    const error = createAxiosError(
      400,
      'InvalidAPIVersion',
      'The API version in path is not supported'
    );
    return Promise.reject(error);
  }

  if (!isAllowedMethod(method)) {
    const error = createAxiosError(
      405,
      'MethodNotAllowed',
      'The HTTP method should be one of \'get\', \'post\', \'put\''
    );
    return Promise.reject(error);
  }

  return this.request(requestOptions);
}

module.exports.legacy = legacy;
