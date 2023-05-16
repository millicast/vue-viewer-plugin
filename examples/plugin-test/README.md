# plugin-test

This project is a plugin that allows testing integration with vue viewer plugin.

## Environment Setup

Before you can use the plugin, you'll need to set up some environment variables in the `.env` file. Follow these steps:

1. Copy the `examples/plugin-test/.env.sample` file.

2. Rename it to `.env`.

3. Set the following enviroment variables according to your Millicast account and stream name:

    -  `VUE_APP_MILLICAST_ACCOUNT_ID` - Dolby.io account id

    -  `VUE_APP_MILLICAST_STREAM_NAME` - Dolby s stream name

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
