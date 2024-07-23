# Millicast Vue.js Web Viewer Plugin

![npm (scoped)](https://img.shields.io/npm/v/@millicast/vue-viewer-plugin)

A Vue.js plugin to embed a Millicast player into your app. This plugin allows developers to simplify the integration of Millicast services into their own Vue.js apps.

## Installation

To add this library to your project, from the command line execute the following instruction:

```bash
npm install @millicast/vue-viewer-plugin
```

or if you use [Yarn](https://yarnpkg.com)

``` bash
yarn add @millicast/vue-viewer-plugin
```

## Basic Usage

To import the plugin into your Vue application, have the following structure in your `main.js` file:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
// import the plugin
import VideoPlayer from "@millicast/vue-viewer-plugin"

const  Vue = createApp(App)

// install within your app
Vue.use(VideoPlayer, {})

Vue.mount('#app')
```

You can either include the following dependecy at the **end** of your `App.vue` file:

```html
<style>
    @import "@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css";
</style>
```

Or add the following dependecy at the beginning of your `main.js` file:

```javascript
import "@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css"
```

You can now use the plugin in any Vue file of your project as a component.

### Configuration Parameters

| Name           | Type             | Attribute | Default             | Description                                                                                          |
| -------------- | ---------------- | --------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`    | `String`         | Mandatory |                     | Millicast existing *Account ID* where you want to get the stream.                                    |
| `streamName`   | `String`         | Mandatory |                     | Millicast existing *Stream Name* where you want to get the stream.                                   |
| `image`        | `String`         | Optional  |                     | Placeholder image while stream is offline. By default it is a solid black.                           |
| `muted`        | `Boolean`        | Optional  | `false`             | The streaming will start muted.                                                                      |
| `autoplay`     | `Boolean`        | Optional  | `true`              | The streaming will autoplay when connected.                                                          |
| `hideButtons`  | `Array.<String>` | Optional  | `[]`                | Specify a list of buttons to hide. See the [hide buttons](#hidebuttons-options) section for details. |
| `reportUrl`    | `String`         | Optional  | `null`              | Configure the URL to which reports should be sent to.                                                |
| `chromecastId` | `String`         | Optional  | `null`              | The Chromecast ID of your application.                                                               |
| `multisource`  | `Boolean`        | Optional  | `false`             | Configure your stream to show multiple streams.                                                      |
| `noDelay`      | `Boolean`        | Optional  | `false`             | Sets the minimum and maximum delay (sets `forcePlayoutDelayMin` and `forcePlayoutDelayMax` to 0).    |
| `showLabels`   | `Boolean`        | Optional  | `true`              | Show stream label in multiview mode.                                                                 |
| `environment`  | `Object`         | Optional  | `.env file content` | Plugin environment. See [Environment options](#environment-options) on how to configure.             |
| `mainLabel`    | `String`         | Optional  |                     | Allows to change the label of the main video.                                                        |
| `startingQuality` | `String` | Optional | `null`| Allows to start the stream at a specific resolution when available. Possible values: 'High', 'Medium', 'Low', <Number> specifying the desired frame height (i.e. 360). |
| `hideToast`   | `String`          | Optional |  `null`              | Allows to hide a specific type of toast notification. To hide multiple toast types, separate them using `,`. Possible values: `success`, `error`, `warning`, `info`. |
| `audioFollowsVideo`| `Boolean`    | Optional  | `false`             | Allows automatically switching the audio to the one associated with the selected video source.       |
| `forcePlayoutDelayMin`| `Number`    | Optional  | `null`            | Sets a minimum value for a custom delay to playback the stream. It needs to be set with its maximum value, forcePlayoutDelayMax. |
| `forcePlayoutDelayMax`| `Number`    | Optional  | `null`            | Sets a maximum value for a custom delay to playback the stream. It needs to be set with its minimum value, forcePlayoutDelayMin. |

To be able to use the viewer, just reference the `VideoPlayer` component, and pass the parameters of your choice as an object in the parameter `paramsOptions`. Refer to the [example usage](#example-apps).

#### hideButtons options

You can choose to show or hide certain buttons in the player in order to customize your experience.

| Option       | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `play`       | Hides the *play* button.                                                                                  |
| `volume`     | Hides the *volume* button.                                                                                |
| `pip`        | Hides the button that allows the small reproduction (picture-in-picture mode), in a corner of the window. |
| `fullscreen` | Hides the *fullscreen* button.                                                                            |
| `liveBadge`  | Hides the message that indicates whether the stream is live or not.                                       |
| `userCount`  | Hides the number of concurrent viewers of the stream.                                                     |
| `settings`   | Hides the *settings* button.                                                                              |

In case you want to disable all buttons at once, you can simply pass the `controls: false` paremeter, instead of using `hideButtons`.

#### Environment options

You are able to set up the following environment settings. You can refer to [`.env.sample`](.env.sample) as a starting point.

| Option                      | type                        | Description                                                          |
| --------------------------- | --------------------------- | -------------------------------------------------------------------- |
| `NODE_ENV`                  | `production \| development` | Determines if the main app is a `production` or `development` build. |
| `VUE_APP_TURN_ENDPOINT`     | `url: string`               | Sets the turn endpoint.                                              |
| `VUE_APP_LIVEWS_ENDPOINT`   | `url: string`               | Sets the live views endpoint.                                        |
| `VUE_APP_DIRECTOR_ENDPOINT` | `url: string`               | Sets the director endpoint.                                          |
| `VUE_APP_PUBLIC_PATH`       | `url: string`               | Sets the public path endpoint.                                       |
| `VUE_APP_REPORT_URL`        | `url: string`               | The report playback URL.                                             |
| `VUE_APP_CHROMECAST_ID`     | `url: string`               | Chromecast ID of your application.                                   |

In case these parameters are not sent as a property, the plugin will use the default values specified in the .env file.

### Example of Use

```html
<VideoPlayer :paramsOptions="{accountId: '...', streamName: '...', autoplay: false, hideButtons: ['liveBadge'] }" />
```

- Remember that `accountId` and `streamName` are the only requeried parameters.
- At the moment, this plugin allows **only one** instance of the component at a time in a project.

## Example Apps

## Live Chat Example

An example app is also provided which integrates [PubNub](https://www.pubnub.com/docs/) based live chat. You can find this example in the `examples/live-chat` folder.

To set your private PubNub & Dolby.io credentials, create a `.env` file in the root of your project directory. An example of this may be found in the `examples/live-chat/.env.sample`. More information on how to obtain your Dolby.io streaming credentials is available on the [Dolby.io Streaming Docs](https://docs.dolby.io/streaming-apis/docs) page.

In order to run this example app, execute the following commands:

```bash
cd examples/live-chat
npm install
npm run serve
```

This will install the dependencies and run the app.

## Plugin Test App

An example of an interactive and resizable sample app using the vue viewer plugin can be found in the `examples/plugin-test` folder.
This app is for testing purposes.

## Contribute

To develop and contribute to this project, refer to the instructions on how to set up your environment to start contributing [here](https://github.com/millicast/vue-viewer-plugin/blob/main/developer-info.md).

## License

Please refer to [LICENSE](https://github.com/millicast/vue-viewer-plugin/blob/main/LICENSE) file.
