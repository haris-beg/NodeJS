angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope, dataService) {

        $scope.learningNgChange = function () {
            console.log("An input changed!");
        };

        $scope.helloConsole = dataService.helloWorld;

    })
    .service('dataService', function () {

        this.helloWorld = function () {
            console.log('This is the data service's method!');
        };
    });

