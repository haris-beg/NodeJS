angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope, dataService) {

        $scope.helloConsole = dataService.helloConsole;

        $scope.learningNgChange = function () {
            console.log("An input changed!");
        };

    })
    .service('dataService', function () {

        this.helloConsole = function () {
            console.log('This is the hello console service!');
        };
    });

