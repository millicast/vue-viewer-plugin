import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8')
)

const name = 'millicast-vue-viewer-plugin'

export default defineConfig({
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
    lib: {
      entry: fileURLToPath(new URL('./index.js', import.meta.url)),
      name,
      formats: ['es', 'umd'],
      fileName: (format) => `${name}.${format === 'es' ? 'common' : 'umd'}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: `${name}.css`,
      },
    },
  },
})
