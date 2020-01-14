var babel = require('rollup-plugin-babel');
var commonjs = require('rollup-plugin-commonjs');
var json = require('@rollup/plugin-json');

module.exports = {
  input: 'src/index.js',
  plugins: [
    babel({ exclude: 'node_modules/**'}),
    commonjs(),
    json()
  ],
  external: ['react', 'react-dom'],
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  }
};
