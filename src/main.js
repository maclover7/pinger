// Vue imports and initialization
var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = Vue.extend({});
var router = new VueRouter({
  history: true
});

// Component imports
var Container = require('./components/Container');
var Home = require('./components/Home');

router.map({
  '/': {
    component: Container,

    subRoutes: {
      '/': {
        component: Home
      }
    }
  }
});

router.start(App, '#app');
