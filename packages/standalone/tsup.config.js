const alias = require('esbuild-plugin-alias');
const { nodeBuiltIns } = require('esbuild-node-builtins');

/**
 * @type {import("tsup").Options}
 */
module.exports = {
  dts: true,
  entryPoints: ['src/index.ts'],
  esbuildPlugins: [
    alias({
      react: require.resolve('preact/compat'),
      'react-dom': require.resolve('preact/compat'),
      'react-dom/test-utils': require.resolve('preact/test-utils'),
      'react/jsx-runtime': require.resolve('preact/jsx-runtime'),
    }),
    nodeBuiltIns(),
  ],
  // `aws-amplify` is external, but sub-dependencies weren't automatically externalized ("require" statements were included)
  external: ['aws-amplify', /^@aws-amplify\/(core|auth)/],
  format: ['cjs', 'esm'],
  inject: ['src/react-shim.js'],
  // ! .cjs/.mjs doesn't work with Angular's webpack4 config by default!
  legacyOutput: true,
  sourcemap: 'external',
  splitting: false,
};