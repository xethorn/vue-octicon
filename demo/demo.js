var Vue = require('vue')
var Demo = require('./Demo.vue')
var Octicon = require('../src/components/Octicon.vue')

Vue.component('octicon', Octicon);

new Vue({
  el: 'body',
  components: {
    demo: Demo
  }
})
