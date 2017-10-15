<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [TokenFilter](#tokenfilter)
- [Getting started](#getting-started)
  - [CLI commands for development](#cli-commands-for-development)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# TokenFilter

# Getting started

### Install dependencies

  ```sh
  (
    export PKG=token-filters;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

### Include component & CSS
```js
import TokenFilter from 'token-filter';
```

Using Webpack with CSS loader, add the following import to your app:

```js
import 'token-filter/styles.js';
```

## CLI commands for development

  ```sh
    # launch a storybook session with token filters
    yarn run storybook

    # build the component using a rollup script
    yarn run build

    # Run flow types
    yarn run test:flow

    # Run eslint checker
    yarn run lint

    # check package.json scripts section for more
    cat package.json
  ```
