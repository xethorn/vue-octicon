# Vue-Octicon

> Octicon component for Vue.js, using inline SVG.

*This project is a proof of concept for pure frontend inline SVG icons.*

Vue-Octicon is built upon [Octicons](https://octicons.github.com/) `v3.5.0` and depends on [Vue.js](https://vuejs.org/) `v1.0.17`+.

## Installation

### 

Just download `dist/vue-octicon.js` and include it in your HTML file:

```html
<script src="path/to/vue-octicon/dist/vue-octicon.js"></script>
```

### npm 

```bash
$ npm install vue-octicon
```

### bower

```bash
$ bower install vue-octicon
```

## Usage

```html
<!-- basic -->
<octicon name="repo"></octicon>

<!-- with options -->
<octicon name="sync" scale="2" spin></octicon>
<octicon name="comment" flip="horizontal"></octicon>
<octicon name="repo-forked" label="Forked Repository"></octicon>
```

### CommonJS

```js
var Vue = require('path/to/vue')

// requiring the UMD module
var Octicon = require('path/to/vue-octicon/dist/vue-octicon')

// or with vue-loader you can require the src directly
var Octicon = require('path/to/vue-octicon/src/components/Octicon.vue')

// register component to use
```

### AMD

```js
require.config({
  paths: {
    'vue-octicon': 'path/to/vue-conticon/dist/vue-octicon'
  }
})

require(['vue-octicon'], function (Octicon) {
  // register component to use...
})
```

### Global variable

The component class is exposed as `window.VueOcticon`.

## Local development

```bash
$ npm i
$ npm run dev
```

Open `http://localhost:8080/demo` to see the demo.

## Related projects

* [Vue-Awesome](https://github.com/Justineo/vue-awesome) by the same author of Vue-Octicon.
