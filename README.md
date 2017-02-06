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
  accessToken: 'yourAccessToken', // optional
  refreshToken: 'yourRefreshToken', // optional
  clientId: 'yourClientId', // optional
  clientSecret: 'yourClientSecret', // optional
  domain: 'yourCustomAuthServerDomain', // optional & override
});
```

Or you can update the `authConfig` at any time.

```js
api.updateAuthConfig({
  accessToken: 'yourAccessToken', // required
  refreshToken: 'yourRefreshToken', // optional
});
```

> The prameters `refreshToken`, `clientId`, `clientSecret`, `domain` are
> used to issue new access token.


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
