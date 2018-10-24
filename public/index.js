/* global Vue, VueRouter, axios */

var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/login");
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email, password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    },
    signUp: function() {
      router.push('/signup');
    }
  }
};

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Reckon",
      days: [
        "Sun.",
        "Mon.",
        "Tues.",
        "Wed.",
        "Thurs.",
        "Fri.",
        "Sat."
      ],
      day: 0,
      tasks: [],
      completeTaskCount: 0,
      books: [],
      newBook: {name: "", author: "", dueDate: "", pages: 0},
      newTask: {name: "", dueDate: ""},
      appointments0: [],
      appointments1: [],
      appointments2: [],
      appointments3: [],
      appointments4: [],
      appointments5: [],
      appointments6: [],
      newAppointment: {name: "", startTime: "", startDate: "", endTime: "", endDate: "", location: "", description: ""},
      selectedAppointment: {id: "", name: "", start_time: "", end_time: "", location: "", description: "", friendly_time: ""}
    };
  },
  created: function() {
    axios.get('/api/log').then(function(response) {
      if (response.data.status) {
        var date = new Date;
        this.day = date.getDay() % 7;
        axios.get('/api/tasks').then(function(response) {
          this.tasks = response.data;
        }.bind(this));
        axios.get('/api/tasks/completed').then(function(response) {
          this.completeTaskCount = response.data.count;
        }.bind(this));
        axios.get('/api/books').then(function(response) {
          this.books = response.data;
        }.bind(this));
        
        axios.get('/api/appointments/day/0').then(function(response) {
          this.appointments0 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/1').then(function(response) {
          this.appointments1 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/2').then(function(response) {
          this.appointments2 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/3').then(function(response) {
          this.appointments3 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/4').then(function(response) {
          this.appointments4 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/5').then(function(response) {
          this.appointments5 = response.data;
        }.bind(this));
        axios.get('/api/appointments/day/6').then(function(response) {
          this.appointments6 = response.data;
        }.bind(this));
      } else {
        router.push('/login');
      }
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
    addAppointment: function() {
      var parameters = {
        name: this.newAppointment.name,
        location: this.newAppointment.location,
        description: this.newAppointment.description,
        start_time: this.newAppointment.startDate + "T0" + this.newAppointment.startTime + ":00.007Z",
        end_time: this.newAppointment.endDate + "T0" + this.newAppointment.endTime + ":00.007Z",
      };
      axios.post('/api/appointments', parameters).then(function(response) {
        this.newAppointment = {name: "", startTime: "", startDate: "", endTime: "", endDate: "", location: "", description: ""};
        this.appointments.push(response.data);
      }.bind(this));
    },
    selectAppointment: function(inputAppointment) {
      this.selectedAppointment = inputAppointment;
    },
    updateAppointment: function() {
      var parameters = {
        name: this.selectedAppointment.name,
        description: this.selectedAppointment.description,
        location: this.selectedAppointment.location,
        start_time: this.selectedAppointment.start_time,
        end_time: this.selectedAppointment.end_time
      };
      axios.patch('/api/appointments/' + this.selectedAppointment.id, parameters);
    },
    deleteAppointment: function() {
      axios.delete('/api/appointments/' + this.selectedAppointment.id);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/signup", component: SignupPage },
    { path: "/login", component: LoginPage },
    { path: "/logout", component: LogoutPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});