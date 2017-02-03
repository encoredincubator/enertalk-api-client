const APIClient = require('../client');
const constants = require('../constants');

test('initialization', () => {
  expect(new APIClient({
    accessToken: 'abcd',
  })).toBeInstanceOf(APIClient);
});

test('update authConfig after initialization', () => {
  const client = new APIClient();
  expect(() => client.updateAuthConfig()).toThrow();

  client.updateAuthConfig({
    accessToken: 'yourAccessToken',
  });

  expect(client.authConfig).toMatchObject({
    accessToken: 'yourAccessToken',
  });
});

test('authConfig | accessToken', () => {
  const client = new APIClient({
    accessToken: 'yourAccessToken',
  });

  expect(client.authConfig).toMatchObject({
    accessToken: 'yourAccessToken',
  });
  expect(client.defaults.headers.Authorization).toMatch('yourAccessToken');
});

test('authConfig | refreshInfo', () => {
  const client = new APIClient({
    accessToken: 'yourAccessToken',
    refreshToken: 'yourRefreshToken',
    clientId: 'yourClientId',
    clientSecret: 'yourClientSecret',
  });

  expect(client.authConfig).toEqual({
    accessToken: 'yourAccessToken',
    refreshToken: 'yourRefreshToken',
    clientId: 'yourClientId',
    clientSecret: 'yourClientSecret',
    domain: constants.authDomain,
  });
});

test('authConfig | override domain', () => {
  const client = new APIClient({
    accessToken: 'yourAccessToken',
    domain: 'customAuthServerDomain',
  });

  expect(client.authConfig.domain).toBe('customAuthServerDomain');
});

test('options is optional', () => {
  expect(new APIClient({
    accessToken: 'yourAccessToken',
  }, undefined)).toBeInstanceOf(APIClient);

  expect(new APIClient({
    accessToken: 'yourAccessToken',
  }, null)).toBeInstanceOf(APIClient);

  expect(new APIClient({
    accessToken: 'yourAccessToken',
  }, 'invalidType')).toBeInstanceOf(APIClient);
});

test('default options', () => {
  const client = new APIClient({
    accessToken: 'yourAccessToken',
  });

  expect(client.axiosConfig).toMatchObject({
    baseURL: constants.resourceDomain,
    headers: {
      Authorization: `Bearer yourAccessToken`,
      'accept-version': '2.0.0',
    },
  });
});

test('override baseURL', () => {
  const client = new APIClient({
    accessToken: 'yourAccessToken',
  }, {
    baseURL: 'customResourceServerDomain',
  });

  expect(client.axiosConfig.baseURL).toBe('customResourceServerDomain');
});
