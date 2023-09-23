import { rollup } from 'rollup'
import assert from 'assert'
import pkg from '../package.json' assert { type: 'json' }
import string from '../dist/rollup-plugin-string.min.mjs'

const include = '**/*.html'
const input = 'fixtures/basic.js'

process.chdir('test')

describe(pkg.name, () => {
  it('should stringify importing template', () => {
    return rollup({ input, plugins: [ string({ include }) ] })
      .then(bundle => bundle.generate({ format: 'iife', name: 'tpl' }))
      .then(({ code }) => {
        new Function('assert', code)(assert)
      })
  })

  it('should output empty sourcemap', () => {
    return rollup({ input, plugins: [ string({ include }) ] })
      .then(bundle => bundle.generate({ format: 'esm', sourcemap: false }))
      .then(({ output }) => {
        const [{ code, map }] = output
        assert.ok(code)
        assert.ok(map === null)
      })
  })

  it('throws when include is not specified', () => {
    assert.throws(() => {
      rollup({ input, plugins: [ string() ] })
    }, /include option should be specified/)
  })
})
