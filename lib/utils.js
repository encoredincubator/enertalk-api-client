function createAxiosError(code = 500, type = 'InternalError', message = null) {
  return {
    response: {
      data: {
        code,
        type,
        message,
      },
    },
  };
}

module.exports = {
  createAxiosError,
};
