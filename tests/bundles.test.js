import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as Vue from 'vue';

// These tests run against the built files, so run `pnpm run build` first.
const readDist = (file) =>
  readFileSync(join(import.meta.dirname, '../dist', file), 'utf8');

const umdSource = readDist('millicast-vue-viewer-plugin.umd.js');
const esSource = readDist('millicast-vue-viewer-plugin.common.js');

const requireVue = (id) => {
  if (id !== 'vue') throw new Error(`Unexpected require('${id}')`);
  return Vue;
};

const evaluateUmd = ({ module, define }) =>
  new Function('module', 'exports', 'require', 'define', umdSource).call(
    globalThis,
    module,
    module?.exports,
    requireVue,
    define
  );

const expectWorkingPlugin = (plugin) => {
  expect(typeof plugin.install).toBe('function');
  expect(typeof plugin.sdkVersion).toBe('string');
};

describe('UMD build', () => {
  it('loads with CommonJS and an AMD define, like webpack', () => {
    const module = { exports: {} };
    const define = vi.fn();
    define.amd = {};

    evaluateUmd({ module, define });

    expectWorkingPlugin(module.exports);
    expect(define).not.toHaveBeenCalled();
  });

  it('registers itself once with an AMD-only loader, like RequireJS', () => {
    let plugin;
    const define = vi.fn((deps, factory) => {
      if (Array.isArray(deps)) plugin = factory(...deps.map(requireVue));
    });
    define.amd = {};

    evaluateUmd({ module: undefined, define });

    expect(define).toHaveBeenCalledTimes(1);
    expect(define.mock.calls[0][0]).toEqual(['vue']);
    expectWorkingPlugin(plugin);
  });
});

describe('ES build', () => {
  it('keeps @millicast/sdk external', () => {
    expect(esSource).toMatch(/from\s*["']@millicast\/sdk["']/);
  });

  it('has no AMD branches from bundled dependencies', () => {
    expect(esSource).not.toMatch(/define\.amd/);
  });
});
