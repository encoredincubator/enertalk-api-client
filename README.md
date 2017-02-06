# EnerTalk API Client
The EnerTalk API Wrapper for convenience

## Requirements
Authentication must be perform by EnerTalk tokens based on OAuth2.  
You can find a way to get tokens on [our developer site](https://developer.encoredtech.com/authentication/).  


## Getting Started

#### Install Package
```sh
> npm install enertalk-api-client
```

#### Import Package
```js
const EnerTalkAPI = require('enertalk-api-client');

or

import EnerTalkAPI from 'enertalk-api-client';
```

#### Make an instance
```js
const api = new EnerTalkAPI(authConfig, options);
```

#### Use methods with promise
```js
api.getUser()
  .then(response => console.log(response.data))
  .catch(error => console.log(error.response.data));
```


## Auth Config

Set the `authConfig` at the point of initialization.

```js
const api = new EnerTalkAPI({
  accessToken: 'yourAccessToken',
  refreshToken: 'yourRefreshToken',
  clientId: 'yourClientId',
  clientSecret: 'yourClientSecret',
  domain: 'yourCustomAuthServerDomain', // Default domain will be override
  updateTokenFn: (tokenObject) => {
    // The logic that update your token storage
  },
});
```

Or you can update the `authConfig` at any time.

```js
api.updateAuthConfig({
  accessToken: 'yourAccessToken',
  refreshToken: 'yourRefreshToken',
  // ...otherFields,
});
```
> NOTE:  
> 1. The prameters `refreshToken`, `clientId`, `clientSecret`, `domain` are
> used to issue new access token.  
> 2. `updateTokenFn` will be called when new token issued. You can sync the token object with your token storage.


## Request Options
This option follows [axios request config](https://github.com/mzabriskie/axios#request-config).

For example,
```js
const api = new EnerTalkAPI(authConfig, {
  baseURL: 'yourCustomResourceServerDomain',
  timeout: 10000,
});
```


## Supported API Methods

| name:[...parameters] | description |
| --- | --- |
| `getUser:` | Get user profile |
| `listSites:` | List sites |
| `listDevicesOfSite:siteIds` | List devices of multiple sites |
| `getBills:siteId` | Get bill information |
| `periodicUsagesBySite:siteId:params` | Get usage for a site |
| `periodicUsagesByTag:siteId:tagId:params` | Get usage for a tag |
| `periodicUsagesByDevice:deviceId:params` | Get usage for a device |
| `periodicUsagesByDeviceWithChannels:devcieId:params` | Get usage for a device with channels |
| `billingUsagesBySite:siteId:params` | Get usage and bill for a site |   
| `billingUsagesByTag:siteId:tagId:params` | Get usage and bill for a tag |
| `billingUsagesByDevice:deviceId:params` | Get usage and bill for a device |  
| `billingUsagesByDeviceWithChannels:devcieId:params` | Get usage and bill for a device with channels |
| `realtimeUsagesBySite:siteId` | Get real time usage for a site |
| `realtimeUsagesByTag:siteId:tagId` | Get real time usage for a tag |
| `realtimeUsagesByDevice:deviceId` | Get real time usage for a device |
| `realtimeUsagesByDeviceWithChannels:devcieId` | Get real time usage for a device with channels |  

...

These will continue to be added.
