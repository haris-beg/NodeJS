'use strict';
// Attach the service to an existing module
angular.module("todoListApp")
    .service('dataService', function ($http) {

        this.helloWorld = function () {
            console.log("This is the data service's method!");
        };

        this.getTodos = function(callback) {
            // $http.get actually returns a promise
            // and it can take a callback as a parameter
            $http.get('mock/todos.json')
                .then(callback)
        };

        this.deleteTodo = function (todo) {
            console.log("The " + todo.name + " todo has been deleted!");
            // In real life, this should call an API that will delete the data from a DB
        };

        this.saveTodos = function (todos) {
            console.log(todos.length + " todos have been saved!");
            // In real life, this should call an API that will save the data in a DB
        };
    });
