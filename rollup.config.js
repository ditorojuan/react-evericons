var babel = require('rollup-plugin-babel');
var commonjs = require('rollup-plugin-commonjs');

module.exports = {
  input: 'src/index.js',
  plugins: [
    babel({ exclude: 'node_modules/**'}),
    commonjs(),
  ],
  external: ['react'],
  output: [{
    file: 'dist/bundle.umd.js',
    format: 'cjs'
  }, {
    file: 'dist/bundle.esm.js',
    format: 'esm'
  }]
};
