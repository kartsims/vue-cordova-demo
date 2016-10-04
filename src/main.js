import Vue from 'vue'
import App from './App'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

// Enable debugging to show plugin loading in the console output
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
