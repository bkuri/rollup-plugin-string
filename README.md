# rollup-plugin-string

Converts text files to modules.

Sourced from [TrySound/rollup-plugin-string](), refactored and updated libraries.

```js
import text from "./main.txt"
console.log('text: %s', text)
```

## Installation

```sh
npm i -D @bkuri/rollup-plugin-string
# or
yarn add -D @bkuri/rollup-plugin-string
# or
pnpm install -D @bkuri/rollup-plugin-string
```

## Usage

```js
// rollup.config.js
import string from '@bkuri/rollup-plugin-string'

export default {
  input: 'index.js',

  plugins: [
    string({
      // Required to be specified
      include: '**/*.txt',

      // Undefined by default
      exclude: [ '**/index.txt' ]
    })
  ]
}
```

## License

### MIT © [Bernardo Kuri](mailto:github+rollup-plugin-string@bkuri.com)