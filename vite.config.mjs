import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8')
)

const name = 'millicast-vue-viewer-plugin'

// npm/bundler consumers resolve @millicast/sdk from their own dependency tree,
// so the ES build leaves it external. The UMD build is for <script> users, who
// have no module resolution, so it keeps the SDK bundled. Vite lib mode shares
// one rollup config across formats, so each format is its own build:
// `vite build` (es, empties dist) then `vite build --mode umd`.
const isSdk = (id) => id === '@millicast/sdk' || id.startsWith('@millicast/sdk/')

export default defineConfig(({ mode }) => {
  const umd = mode === 'umd'

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'google-cast-launcher',
          },
        },
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.json', '.vue'],
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['color-functions', 'global-builtin'],
        },
      },
    },
    build: {
      target: 'es2018',
      sourcemap: true,
      cssCodeSplit: false,
      emptyOutDir: !umd,
      lib: {
        entry: fileURLToPath(new URL('./index.js', import.meta.url)),
        name,
        formats: [umd ? 'umd' : 'es'],
        fileName: (format) => `${name}.${format === 'es' ? 'common' : 'umd'}.js`,
      },
      rollupOptions: {
        external: umd ? ['vue'] : (id) => id === 'vue' || isSdk(id),
        output: {
          globals: { vue: 'Vue' },
          assetFileNames: `${name}.css`,
        },
      },
    },
  }
})
