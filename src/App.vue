<template>
  <div id="app">

    <div class="logo">
      <img src="./assets/vuejs.png">
      <span>+</span>
      <img src="./assets/cordova.png">
    </div>

    <div v-if="!cordova" class="alert">
      There might be an error with your installation. Check that <strong>Vue.cordova</strong> is available
    </div>

    <div v-if="cordova && !cordova.deviceready" class="alert">
      The `deviceready` event has not been triggered.
      <br />
      Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>

    <div class="indicators">
      <div :class="{ ok: cordova.deviceready }">
        <span></span>deviceready
      </div>
      <div v-for="plugin in plugins" :class="{ ok: pluginEnabled(plugin) }">
        <span></span>{{ plugin }}
      </div>
    </div>

    <h2>`Vue.cordova`</h2>

    <div class="dump" v-if="cordova">{{ cordova | json }}</div>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    }
  },
  data: function () {
    return {
      cordova: Vue.cordova,
      plugins: [
        'cordova-plugin-camera',
        'cordova-plugin-device',
        'cordova-plugin-geolocation'
      ]
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  color: #2c3e50;
  margin: 40px auto;
  max-width: 640px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  padding-bottom: 30px;
}

.logo span {
  position: relative;
  top: -30px;
  font-size: 36px;
  margin: 0 20px;
}

.logo img {
  width: 90px;
  height: 90px;
}

div.dump {
  background: #eee;
  text-align: left;
  border: solid 1px #ccc;
  padding: 20px;
  max-width: 600px;
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre;
}

div.alert {
  color: #c00;
  font-weight: bold;
  font-size: .9em;
  padding-bottom: 30px;
  line-height: 1.6;
}

div.alert a {
  color: inherit;
}

div.indicators {
  width: 250px;
  margin: 0 auto 40px;
  text-align: left;
  font-family: Courier, Courier New, sans-serif;
}
div.indicators div {
  padding-bottom: 15px;
  opacity: .6;
}
div.indicators div.ok {
  opacity: 1;
}
div.indicators div.ok span {
  background: #0c0;
}
div.indicators div span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c00;
  border-radius: 20px;
  position: relative;
  top: 3px;
  margin-right: 15px;
}
</style>
