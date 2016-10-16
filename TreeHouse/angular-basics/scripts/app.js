angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope) {

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

    });

