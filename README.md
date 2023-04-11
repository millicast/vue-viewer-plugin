# Millicast Vue.js Web Viewer Plugin

![npm (scoped)](https://img.shields.io/npm/v/@millicast/vue-viewer-plugin)

Vue.js plugin to embed viewer of a Millicast stream. This plugin allows developers to simplify Millicast services integration into their own Vue.js apps.

## Installation

To install the dependecies to your project, from the command line execute the following instruction:

```bash
npm install @millicast/vue-viewer-plugin
```

## Basic Usage

To import the plugin to your Vue application, in your `main.js` file be sure to have the following structure:

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

At the end of the file `App.vue`, you must include the following dependecy:
```html
<style>
    @import "@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css";
</style>
```

**Optional:** If you want to use the chromecast feature you should also add the next script in your HTML:
```html
<script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
```

Once this is done, you are ready to use the plugin in any Vue file of your project as a component.

### Configuration Parameters

| Name           | Type             | Attribute | Default | Description                                                                                       |
| -------------- | ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------------- |
| `accountId`    | `String`         | Mandatory |         | Millicast existing *Account ID* where you want to get the stream.                                 |
| `streamName`   | `String`         | Mandatory |         | Millicast existing *Stream Name* where you want to get the stream.                                |
| `image`        | `String`         | Optional  |         | Placeholder image while stream is offline. By default it is a solid black.                        |
| `muted`        | `Boolean`        | Optional  | `false` | The streaming will start muted.                                                                   |
| `autoplay`     | `Boolean`        | Optional  | `true`  | The streaming will autoplay when connected.                                                       |
| `hideButtons`  | `Array.<String>` | Optional  | `[]`    | The list is provided further in this document.                                                    |
| `reportUrl`    | `String`         | Optional  | `null`  | The report playback URL service.                                                                  |
| `chromecastId` | `String`         | Optional  | `null`  | The Chromecast ID of your application.                                                            |
| `multisource`  | `Boolean`        | Optional  | `false` | The streaming will start using multiview.                                                          |
| `noDelay`      | `Boolean`        | Optional  | `false` | Sets the minimum and maximum delay (sets `forcePlayoutDelayMin` and `forcePlayoutDelayMax` to 0). |

To be able to use the viewer, just reference to the component `VideoPlayer`, and pass the parameters of your choice as an object in the parameter `paramsOptions`. Later in this document, you will find an example of use.

#### `hideButtons` options

In order to customize your experience using the plugin, you are able to hide the buttons.

| Option       | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `play`       | Hides *play* button.                                                            |
| `volume`     | Hides *volume* button.                                                          |
| `pip`        | Hides the button that allows the small reproduction, in a corner of the window. |
| `fullscreen` | Hides *fullscreen* button.                                                      |
| `liveBadge`  | Hides the message that indicates whether the stream is live or not.             |
| `userCount`  | Hides the number of current viewers of the sreaming.                            |
| `settings`   | Hides *settings* button.                                                        |

In case you want to disable all buttons at once, you can simply pass the paremeter `controls: false`, instead of using `hideButtons`.

### Example of Use

```html
<VideoPlayer :paramsOptions="{accountId: '...', streamName: '...', autoplay: false, hideButtons: ['liveBadge'] }" />
```

- Remember that `accountId` and `streamName` are the only requeried parameters.
- At the moment, this plugin allows **only one** instantiation of the component at a time by project.

## Example App

An example app is also provided which integrates a [PubNub](https://www.pubnub.com/docs/) based live chat, this example can be found in the `examples/live-chat` folder.

To set your private PubNub & Millicast credentials, create a `.env` file. An example of this may be found in the `examples/live-chat/.env.sample`. Read [Dolby.io Streaming Docs](https://docs.dolby.io/streaming-apis/docs) for more information on how to obtain your Millicast credentials.

In order to run this example app, execute the following commands:

```bash
cd examples/live-chat
npm install
npm run serve
```

This will install the dependencies and run the app.

# Contribute

To develop and contribute to this project, there are some instructions of how to set up your environment to start contributing. [Follow this link](https://github.com/millicast/vue-viewer-plugin/blob/main/developer-info.md).

# License
Please refer to [LICENSE](https://github.com/millicast/vue-viewer-plugin/blob/main/LICENSE) file.
