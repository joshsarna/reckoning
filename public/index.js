/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Reckon",
      tasks: [],
      completeTaskCount: 0,
      books: [],
      newBook: {name: "", author: "", dueDate: "", pages: 0},
      newTask: {name: "", dueDate: ""},
      appointments: []
    };
  },
  created: function() {
    axios.get('/api/tasks').then(function(response) {
      this.tasks = response.data;
    }.bind(this));
    axios.get('/api/tasks/completed').then(function(response) {
      this.completeTaskCount = response.data.count;
    }.bind(this));
    axios.get('/api/books').then(function(response) {
      this.books = response.data;
    }.bind(this));
    axios.get('/api/appointments').then(function(response) {
      this.appointments = response.data;
    }.bind(this));
  },
  methods: {
    addBook: function() {
      var parameters = {
        name: this.newBook.name,
        author: this.newBook.author,
        pages: this.newBook.pages,
        due_date: this.newBook.dueDate
      };
      axios.post('/api/books', parameters).then(function(response) {
        this.books.push(response.data);
        this.newBook = {name: "", author: "", dueDate: "", pages: 0};
      }.bind(this));
    },
    addTask: function() {
      var parameters = {
        name: this.newTask.name,
        due_date: this.newTask.dueDate
      };
      axios.post('/api/tasks', parameters).then(function(response) {
        this.tasks.push(response.data);
        this.newTask = {name: "", dueDate: ""};
      }.bind(this));
    },
    finishBook: function(number) {
      var id = number;
      axios.patch('/api/books/' + id, {completed_status: true}).then(function(response) {
        axios.get('/api/books').then(function(response) {
          this.books = response.data;
        }.bind(this));
      }.bind(this));
    },
    finishTask: function(number) {
      var id = number;
      axios.patch('/api/tasks/' + id, {completed_status: true}).then(function(response) {
        this.completeTaskCount ++;
        axios.get('/api/tasks').then(function(response) {
          this.tasks = response.data;
        }.bind(this));
      }.bind(this));
    },
  },
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