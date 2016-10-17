angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope, dataService) {

        $scope.learningNgChange = function () {
            console.log("An input changed!");
        };

        $scope.helloWorld = dataService.helloWorld;

        dataService.getTodos(function(response) {
            console.log(response.data);
            $scope.todos = response.data;
        });

        $scope.deleteTodo = function (todo, index) {
            dataService.deleteTodo(todo);
            $scope.todos.splice(index, 1);
        };

        $scope.saveTodo = function (todo, index) {
            dataService.saveTodo(todo);
            // don't we need to something to $scope.todos here?
        };

    })
    .service('dataService', function ($http) {

        this.helloWorld = function () {
            console.log("This is the data service's method!");
        };
        
        this.getTodos = function(callback) {
            // $http.get actually returns a promise
            // and it can take a callback as a parameter
            $http.get('mock/todos.json')
                .then(callback)
        }

        this.deleteTodo = function (todo) {
            console.log("The " + todo.name + " todo has been deleted!");
            // In real life, this should call an API that will delete the data from a DB
        };
        
        this.saveTodo = function (todo) {
            console.log("The " + todo.name + " todo has been saved!");
            // In real life, this should call an API that will save the data in a DB
        };
    });

