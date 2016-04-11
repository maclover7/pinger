var Vue = require('vue');
var VueRouter = require('vue-router');
// var Hello = require('./components/Hello');

Vue.use(VueRouter);

var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
});

var App = Vue.extend({});
var router = new VueRouter();

router.map({
  '/foo': {
    component: Foo
  }
});

router.start(App, '#app');
