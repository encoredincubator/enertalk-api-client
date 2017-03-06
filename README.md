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
  tokenUpdateFn: (tokenObject) => {
    // The logic that update your token storage
    // `tokenObject`has fields below:
    // - `accessToken`
    // - `refreshToken`
    // - `expiresIn` (unit: second)
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
> 2. `tokenUpdateFn` will be called when new token issued. You can sync the token object with your token storage.


## Request Options
This option follows [axios request config](https://github.com/mzabriskie/axios#request-config).

For example,
```js
const api = new EnerTalkAPI(authConfig, {
  baseURL: 'yourCustomResourceServerDomain',
  timeout: 10000,
});
```

## Get API
There are two ways to get an Api object. It's `getApi(key)` and `getAllApis()`.   
`key` is name of API.

For example,

```js
//enerTalkApi is instance of EnerTalkApi
//get only one api.
const billApi = enerTalkApi.getApis('bills');
billApi.getSuppliers();

//get multiple apis.
const multipleApis = enerTalkApi.getApis(['bills', 'usages', ...]);
multipleApis.bills.getSuppliers();

//get All apis.
const multipleApis = enerTalkApi.getApis();

```


## Supported API Methods
Clicking on a category takes you to the api document.

<table>
  <thead>
    <tr>
      <th>category</th>
      <th>method</th>
      <th>descriptions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">[bills](https://developer.encoredtech.com/api2-bill/)</td>
      <td>getBills(siteId:String)</td>
      <td>Get billing information</td>
    </tr>
    <tr>
      <td>getSuppliers()</td>
      <td>List suppliers</td>
    </tr>
    <tr>
      <td>getRatePlanSchema(siteId:String, ratePlanId:Number)</td>
      <td>Get rate plan schema</td>
    </tr>
    <tr>
      <td rowspan="6">[devices](https://developer.encoredtech.com/api2-devices/)</td>
      <td>listDevicesOfSite(siteId:String)</td>
      <td>List devices of a site</td>
    </tr>
    <tr>
      <td>createDevice(siteId:String, data:Object)</td>
      <td>Create device</td>
    </tr>
    <tr>
      <td>getDevice(deviceId:String)</td>
      <td>Get device</td>
    </tr>
    <tr>
      <td>updateDevice(deviceId:String, data:Object)</td>
      <td>Update device</td>
    </tr>
    <tr>
      <td>replaceDevice(deviceId:String, data:Object)</td>
      <td>Replace device</td>
    </tr>
    <tr>
      <td>deleteDevice(deviceId:String)</td>
      <td>Delete device</td>
    </tr>
    <tr>
      <td rowspan="4">[push](https://developer.encoredtech.com/api2-push/)</td>
      <td>registerPushId(data:Object)</td>
      <td>Register push id</td>
    </tr>
    <tr>
      <td>getPushInfo(params:Object)</td>
      <td>Get push information</td>
    </tr>
    <tr>
      <td>updatePushStates(data:Object)</td>
      <td>Update push states</td>
    </tr>
    <tr>
      <td>getPushStates()</td>
      <td>Get push states</td>
    </tr>
    <tr>
      <td rowspan="5">[sites](https://developer.encoredtech.com/api2-sites/)</td>
      <td>createSite(data:Object)</td>
      <td>Create a site</td>
    </tr>
    <tr>
      <td>listSites()</td>
      <td>Get information of all sites belonging to a user</td>
    </tr>
    <tr>
      <td>getSite(siteId:String)</td>
      <td>Get a site information for a user</td>
    </tr>
    <tr>
      <td>updateSite(siteId:String, data:Object)</td>
      <td>Update a site Information for a user</td>
    </tr>
    <tr>
      <td>deleteSite(siteId:String)</td>
      <td>Delete a site and its devices</td>
    </tr>
    <tr>
      <td rowspan="6">[tags](https://developer.encoredtech.com/api2-tags/)</td>
      <td>createTag(siteId:String, data:Object)</td>
      <td>Create a tag for the site</td>
    </tr>
    <tr>
      <td>listTags(siteId:String)</td>
      <td>List all tags of the site</td>
    </tr>
    <tr>
      <td>getTag(siteId:String, tagId:String)</td>
      <td><Get a tag information./td>
    </tr>
    <tr>
      <td>updateTag(siteId:String, tagId:String, data:Object)</td>
      <td>Update tag information</td>
    </tr>
    <tr>
      <td>deleteTag(siteId:String, tagId:String)</td>
      <td>Delete a tag and untag its devices and channels</td>
    </tr>
    <tr>
      <td>tagDeviceOrChannel(tagId:String, deviceId:String, data:Object)</td>
      <td>Tag or untag a device or channels</td>
    </tr>
    <tr>
      <td rowspan="7">[teams](https://developer.encoredtech.com/api2-teams/)</td>
      <td>createTeam(data:Object)</td>
      <td>Create a team</td>
    </tr>
    <tr>
      <td>listTeams()</td>
      <td>List all teams where authenticated user is a member</td>
    </tr>
    <tr>
      <td>getTeam(teamId:String)</td>
      <td>Retrieve a team information</td>
    </tr>
    <tr>
      <td>updateTeam(teamId:String, data:Object)</td>
      <td>Update team information</td>
    </tr>
    <tr>
      <td>deleteTeam(teamId:String)</td>
      <td>Delete a team</td>
    </tr>
    <tr>
      <td>addTeamMemeber(teamId:Sring, data:Object)</td>
      <td>Add a user to a team</td>
    </tr>
    <tr>
      <td>removeMember(teamId:String, data:Object)</td>
      <td>Remove a member from a team</td>
    </tr>
    <tr>
      <td rowspan="12">[usages](https://developer.encoredtech.com/api2-usages/)</td>
      <td>periodicUsagesBySite(siteId:String, params:Object)</td>
      <td rowspan="4">Get usage from start to end time for a site, tag, or a device.</td>
    </tr>
    <tr>
      <td>periodicUsagesByTag(siteId:String, tagId:String, params:Object)</td>
    </tr>
    <tr>
      <td>periodicUsagesByDevice(deviceId:String, params:Object)</td>
    </tr>
    <tr>
      <td>periodicUsagesByDeviceWithChannels(deviceId:String, params:Object)</td>
    </tr>
    <tr>
      <td>billingUsagesBySite(siteId:String, params:Object)</td>
      <td rowspan="4">Get usage and bill for billing periods from start to end time.</td>
    </tr>
    <tr>
      <td>billingUsagesByTag(siteId:String, tagId:String, params:Object)</td>
    </tr>
    <tr>
      <td>billingUsagesByDevice(deviceId:String, params:Object)</td>
    </tr>
    <tr>
      <td>billingUsagesByDeviceWithChannels(deviceId:String, params:Object)</td>
    </tr>
    <tr>
      <td>realtimeUsagesBySite(siteId:String)</td>
      <td rowspan="4">Get realtime usage information for a site, tag, or a device.</td>
    </tr>
    <tr>
      <td>realtimeUsagesByTag(siteId:String, tagId:String)</td>
    </tr>
    <tr>
      <td>realtimeUsagesByDevice(deviceId:String)</td>
    </tr>
    <tr>
      <td>realtimeUsagesByDeviceWithChannels(deviceId:String)</td>
    </tr>
    <tr>
      <td rowspan="2">[users](https://developer.encoredtech.com/api2-users/)</td>
      <td>getUser()</td>
      <td>Get user information</td>
    </tr>
    <tr>
      <td>updateUser(data:Object)</td>
      <td>Update user information</td>
    </tr>
    <tr>
      <td rowspan="2">timelines</td>
      <td>timelines(registrationId:String, params:Object)</td>
      <td>Get timelines for a site</td>
    </tr>
    <tr>
      <td>updateTimeline(registrationId:String, timelineId:Number, data:Object)</td>
      <td>Update timeline</td>
    </tr>
  </tbody>
</table>

These will continue to be added.
