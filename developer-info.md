# Develop in Millicast Vue.js Web Viewer Plugin

## Build project

- Run `npm run build` in order to generate a new bundle of the plugin.

In case you are using macOS and are experimenting issues regarding this step, you may considere using the following instead:

``` bash
npm run build-legacy
```

- The precedent command generated a new `/dist` folder, you will find your new builds in there.

## Test project

- Run `pnpm test` after `pnpm run build`. The tests load the built files in `/dist` (the UMD build with a webpack-style and a RequireJS-style AMD `define`, and the ES build) and check that they load and register correctly.

- If your project does not have a store, the plugin will create its own. In the contrary, it is necessary to specify the store you are using to share it with the plugin; to do this, you simply have to pass the store to the plugin to allow it to dinamically register the plugin's modules in the store:

``` javascript
Vue.use(VideoPlayer, { store })
```

In this example, `store` is the name of your store.

Please, be careful and do not have modules with the following names, as you might experiment weird issues: `Controls`, `Layers`, `Params`, `Sources`, `ViewConnection`.
