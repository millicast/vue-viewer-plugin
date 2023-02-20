# Develop in Millicast Vue.js Web Viewer Plugin

## Build project

- Run `npm run build` in order to generate a new bundle of the plugin.

In case you are using macOS and are experimenting issues regarding this step, you may considere using the following instead:
```
npm run build-legacy
```

- The precedent command generated a new `/dist` folder, you will find your new builds in there.

- If your project does not have a store, the plugin will create its own. In the contrary, it is necessary to specify the store you are using to share it with the plugin; to do this, you simply have to pass the store to the plugin to allow it to dinamically register the plugin's modules in the store:
```
Vue.use(VideoPlayer, { store })
```
In this example, `store` is the name of your store.

Please, be careful and do not have modules with the following names, as it might experiment weird issues: `Controls`, `Layers`, `Params`, `Sources`, `ViewConnection`.