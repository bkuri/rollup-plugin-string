import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json' assert { type: 'json' }
import terser from '@rollup/plugin-terser'

const globals = {
  '@rollup/pluginutils': 'pluginutils',
  picomatch: 'pm'
}

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.browser, format: 'umd', globals, name: pkg.name },
    { file: pkg.main   , format: 'cjs'                          },
    { file: pkg.module , format: 'esm'                          }
  ],
  plugins: [
    nodeResolve({ resolveOnly: [ 'pm' ] }),
    terser()
  ]
}
