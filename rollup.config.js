// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: [{
    file: 'dist/share.js',
    format: 'cjs'
  }, {
    file: 'dist/share.min.js',
    format: 'cjs',
    plugins: [terser()]
  }],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}