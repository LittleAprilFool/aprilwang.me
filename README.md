# April's Website

This is April's personal website created by [pugjs](https://pugjs.org/api/getting-started.html).

## Getting Started

### Install packages
```
$ npm install
```

### Run locally
```
$ npm run start
``` 

### Build
```
$ npm run build
```

This script does the following task using Webpack:
- Compile `homepage.json` and `homepage.pug` with pugjs
- Bundle all the JavaScript modules inside `./src` into `./dist/bundle.js`
- Compile and bundle all `./src/scss/*.scss` into `./dist/bundle.css`