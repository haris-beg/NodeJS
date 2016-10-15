angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope) {

        $scope.helloWorld = function () {
            console.log("Hello there! This is the main controller function!");
        };

        $scope.todos = [
            {"name": "clean the house"},
            {"name": "water the lawn"},
            {"name": "mow the yard"},
            {"name": "pay bills"},
            {"name": "jog"},
            {"name": "elliptical"}
        ];

    });

