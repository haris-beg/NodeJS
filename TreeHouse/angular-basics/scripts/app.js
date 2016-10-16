angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope, dataService) {

        $scope.helloConsole = dataService.helloConsole;

        $scope.learningNgChange = function () {
            console.log("An input changed!");
        };

        $scope.todos = [
            {"name": "clean the house"},
            {"name": "water the lawn"},
            {"name": "mow the yard"},
            {"name": "pay bills"},
            {"name": "jog"},
            {"name": "elliptical"}
        ];

    })
    .service('dataService', function () {

        this.helloConsole = function () {
            console.log('This is the hello console service!');
        };
    });

