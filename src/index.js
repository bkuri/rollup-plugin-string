import { createFilter } from '@rollup/pluginutils'

export default function string(options = {}) {
  if (!options.include) {
    throw Error('include option should be specified')
  }

  const { exclude, include } = options
  const filter = createFilter(include, exclude)

  return {
    transform(text, id) {
      if (!filter(id)) return
      return { code: `export default ${ JSON.stringify(text) }`, map: null }
    }
  }
}
