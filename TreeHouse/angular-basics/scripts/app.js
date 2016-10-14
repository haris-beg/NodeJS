angular.module("todoListApp", [])
    .controller('mainCtrl', function ($scope) {
        $scope.helloWorld = function () {
            console.log("Hello there! This is the main controller function!");
        }
    })

    .controller('coolCtrl', function ($scope) {
        $scope.whoAmI = function () {
            console.log("hello there, this is the coolCtrl function!");
        }

        $scope.helloWorld = function () {
            console.log("This is not the main controller!");
        }
    })

    .controller('imASibling', function ($scope) {
        $scope.foobar = 12345;

    });
