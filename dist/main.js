/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global Vue, VueRouter, axios */\n\nvar LogoutPage = {\n  template: \"<h1>Logout</h1>\",\n  created: function() {\n    axios.defaults.headers.common[\"Authorization\"] = undefined;\n    localStorage.removeItem(\"jwt\");\n    router.push(\"/login\");\n  }\n};\n\nvar LoginPage = {\n  template: \"#login-page\",\n  data: function() {\n    return {\n      email: \"\",\n      password: \"\",\n      errors: []\n    };\n  },\n  methods: {\n    submit: function() {\n      var params = {\n        email: this.email, password: this.password\n      };\n      axios\n        .post(\"/api/sessions\", params)\n        .then(function(response) {\n          axios.defaults.headers.common[\"Authorization\"] =\n            \"Bearer \" + response.data.jwt;\n          localStorage.setItem(\"jwt\", response.data.jwt);\n          router.push(\"/\");\n        })\n        .catch(\n          function(error) {\n            this.errors = [\"Invalid email or password.\"];\n            this.email = \"\";\n            this.password = \"\";\n          }.bind(this)\n        );\n    },\n    signUp: function() {\n      router.push('/signup');\n    }\n  }\n};\n\nvar SignupPage = {\n  template: \"#signup-page\",\n  data: function() {\n    return {\n      name: \"\",\n      email: \"\",\n      password: \"\",\n      passwordConfirmation: \"\",\n      errors: []\n    };\n  },\n  methods: {\n    submit: function() {\n      var params = {\n        name: this.name,\n        email: this.email,\n        password: this.password,\n        password_confirmation: this.passwordConfirmation\n      };\n      axios\n        .post(\"/api/users\", params)\n        .then(function(response) {\n          router.push(\"/login\");\n        })\n        .catch(\n          function(error) {\n            this.errors = error.response.data.errors;\n          }.bind(this)\n        );\n    }\n  }\n};\n\nvar HomePage = {\n  template: \"#home-page\",\n  data: function() {\n    return {\n      message: \"Reckon\",\n      days: [\n        null,\n        \"Mon.\",\n        \"Tues.\",\n        \"Wed.\",\n        \"Thurs.\",\n        \"Fri.\",\n        \"Sat.\",\n        \"Sun.\",\n        \"Mon.\",\n        \"Tues.\",\n        \"Wed.\",\n        \"Thurs.\",\n        \"Fri.\",\n        \"Sat.\"\n      ],\n      day: 0,\n      tasks: [],\n      completeTaskCount: 0,\n      books: [],\n      newBook: {name: \"\", author: \"\", dueDate: \"\", pages: 0},\n      newTask: {name: \"\", dueDate: \"\"},\n      appointments0: [],\n      appointments1: [],\n      appointments2: [],\n      appointments3: [],\n      appointments4: [],\n      appointments5: [],\n      appointments6: [],\n      newAppointment: {name: \"\", startTime: \"\", startDate: \"\", endTime: \"\", endDate: \"\", location: \"\", description: \"\"}\n    };\n  },\n  created: function() {\n    axios.get('/api/log').then(function(response) {\n      if (response.data.status) {\n        var date = new Date;\n        this.day = date.getDay();\n        axios.get('/api/tasks').then(function(response) {\n          this.tasks = response.data;\n        }.bind(this));\n        axios.get('/api/tasks/completed').then(function(response) {\n          this.completeTaskCount = response.data.count;\n          console.log(response.data);\n        }.bind(this));\n        axios.get('/api/books').then(function(response) {\n          this.books = response.data;\n        }.bind(this));\n        \n        axios.get('/api/appointments/day/0').then(function(response) {\n          this.appointments0 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/1').then(function(response) {\n          this.appointments1 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/2').then(function(response) {\n          this.appointments2 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/3').then(function(response) {\n          this.appointments3 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/4').then(function(response) {\n          this.appointments4 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/5').then(function(response) {\n          this.appointments5 = response.data;\n        }.bind(this));\n        axios.get('/api/appointments/day/6').then(function(response) {\n          this.appointments6 = response.data;\n        }.bind(this));\n      } else {\n        router.push('/login');\n      }\n    }.bind(this));\n  },\n  methods: {\n    addBook: function() {\n      var parameters = {\n        name: this.newBook.name,\n        author: this.newBook.author,\n        pages: this.newBook.pages,\n        due_date: this.newBook.dueDate\n      };\n      axios.post('/api/books', parameters).then(function(response) {\n        this.books.push(response.data);\n        this.newBook = {name: \"\", author: \"\", dueDate: \"\", pages: 0};\n      }.bind(this));\n    },\n    addTask: function() {\n      var parameters = {\n        name: this.newTask.name,\n        due_date: this.newTask.dueDate\n      };\n      axios.post('/api/tasks', parameters).then(function(response) {\n        this.tasks.push(response.data);\n        this.newTask = {name: \"\", dueDate: \"\"};\n      }.bind(this));\n    },\n    finishBook: function(number) {\n      var id = number;\n      axios.patch('/api/books/' + id, {completed_status: true}).then(function(response) {\n        axios.get('/api/books').then(function(response) {\n          this.books = response.data;\n        }.bind(this));\n      }.bind(this));\n    },\n    finishTask: function(number) {\n      var id = number;\n      axios.patch('/api/tasks/' + id, {completed_status: true}).then(function(response) {\n        this.completeTaskCount ++;\n        axios.get('/api/tasks').then(function(response) {\n          this.tasks = response.data;\n        }.bind(this));\n      }.bind(this));\n    },\n    addAppointment: function() {\n      var parameters = {\n        name: this.newAppointment.name,\n        location: this.newAppointment.location,\n        description: this.newAppointment.description,\n        start_time: this.newAppointment.startDate + \"T0\" + this.newAppointment.startTime + \":00.007Z\",\n        end_time: this.newAppointment.endDate + \"T0\" + this.newAppointment.endTime + \":00.007Z\",\n      };\n      axios.post('/api/appointments', parameters).then(function(response) {\n        this.newAppointment = {name: \"\", startTime: \"\", startDate: \"\", endTime: \"\", endDate: \"\", location: \"\", description: \"\"};\n        this.appointments.push(response.data);\n      }.bind(this));\n    }\n  },\n  computed: {}\n};\n\nvar router = new VueRouter({\n  routes: [\n    { path: \"/\", component: HomePage },\n    { path: \"/signup\", component: SignupPage },\n    { path: \"/login\", component: LoginPage },\n    { path: \"/logout\", component: LogoutPage }\n  ],\n  scrollBehavior: function(to, from, savedPosition) {\n    return { x: 0, y: 0 };\n  }\n});\n\nvar app = new Vue({\n  el: \"#vue-app\",\n  router: router,\n  created: function() {\n    var jwt = localStorage.getItem(\"jwt\");\n    if (jwt) {\n      axios.defaults.headers.common[\"Authorization\"] = jwt;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ })

/******/ });