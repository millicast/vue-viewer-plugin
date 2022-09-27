# Millicast Live Chat with Web Viewer as a plugin

## PubNub configuration

A key must be created in [PubNub](https://www.pubnub.com/) and added to the `.env` file.

### Required

| Name                      | Description                                                                |
|---------------------------|---------------------------------------------------------------|
| **VUE_APP_PUBNUB_PUBLISH_KEY**   | Publish key of the key created in PubNub.                     |
| **VUE_APP_PUBNUB_SUBSCRIBE_KEY** | Subscribe key of the key created in PubNub.                   |
| **VUE_APP_PUBNUB_UUID**          | Secret key of the key created in PubNub.                      |

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
