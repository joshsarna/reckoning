/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [],
      books: [],
      appointments: []
    };
  },
  created: function() {
    axios.get('/api/tasks').then(function(response) {
      this.tasks = response.data;
    }.bind(this));
    axios.get('/api/books').then(function(response) {
      this.books = response.data;
    }.bind(this));
    axios.get('/api/appointments').then(function(response) {
      this.appointments = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});