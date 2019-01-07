// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import jQuery from 'jquery';
import scripts from './assets/js/scripts.js';

let Bootstrap = require('bootstrap');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, },
  template: '<App/>',
  data: {
  },
});

