# plugin-test

This sample app will allow you to test the integration with the Vue viewer plugin.

## Environment Setup

Before you can use the plugin, you will need to set up some environment variables in the `.env` file. Follow these steps:

1. Copy the `examples/plugin-test/.env.sample` file.

2. Rename it to `.env`.

3. Set the following enviroment variables according to your Dolby Real Time Streaming account id and stream name:

    -  `VUE_APP_MILLICAST_ACCOUNT_ID` - Dolby Real Time Streaming account id

    -  `VUE_APP_MILLICAST_STREAM_NAME` - Dolby Real Time Streaming stream name

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
