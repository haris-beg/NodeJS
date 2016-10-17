angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope, dataService) {

        $scope.learningNgChange = function () {
            console.log("An input changed!");
        };

        $scope.helloWorld = dataService.helloWorld;

    })
    .service('dataService', function () {

        this.helloWorld = function () {
            console.log("This is the data service's method!");
        };
        
    });

