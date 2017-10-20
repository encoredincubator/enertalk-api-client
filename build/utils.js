'use strict';

function createAxiosError() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'InternalError';
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  return {
    response: {
      data: {
        code: code,
        type: type,
        message: message
      }
    }
  };
}

module.exports = {
  createAxiosError: createAxiosError
};