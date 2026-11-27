import { defineConfig } from 'vitest/config';

// Separate from vite.config.mjs so its `define` replacements (e.g. `define.amd`)
// are not applied to the test files themselves.
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
  },
});
