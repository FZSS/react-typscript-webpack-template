# React 17 + TypeScript 4 + Webpack 5
I can't find a boilerplate for these new major versions, so I made one!

### TypeScript

* `typescript`: v 4.0

* `tsconfig.json` is the config file for TypeScript

* Note on `baseUrl` and `paths`: if I import any dependencies, it seems that I need to set `"moduleResolution": "Node"`, which requires me to add `baseUrl` and `paths` to make resolution successful.

### Webpack

* `webpack`: configs are commented

* `ts-loader`: to load TypeScript with Webpack, we need `ts-loader`

* `webpack-merge`: to merge webpack config files

* `webpack-dev-server`, `webpack-cli` are used to serve a development server

### React

* `react`

* `react-dom`:  necessary for react to be used for the web

* To make react have type declarations for TypeScript
  > `npm install @types/react @types/react-dom`

* `import * as React from 'react` in all tsx file to make Typescript happy.

### Prettier
* Actually great stuff, it formats your code nicely automatically.

### Testing
* OMGOMGOMG
* `jest` is good testing package, but ... lots of config
* `ts-jest` is necessary to make `jest` work with `ts`
* `enzyme` renders the `dom`, possibly I can remove `react-test-renderer`
* `react-test-renderer` was added for snapshot testing
* Need to make a setup script for enzyme, why sway?
* the baseUrl + paths are supposed to be mapped with the helper function `pathsToModuleNameMapper` from `ts-jest`, did not work

### Redux
* `@reduxjs/toolkit` reduces the boilerplate so much, built something similar before.

### Linter
* TBA
