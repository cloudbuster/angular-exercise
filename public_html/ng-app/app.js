/**
 * ng-scripts will be added here later from index.html
 */

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
    $routeProvider

            .when('/templateOne', {
                templateUrl: './templates/templateOne.html',
                controller: 'templateOneController'
            })

            .when('/templateTwo', {
                templateUrl: './templates/templateTwo.html',
                controller: 'templateTwoController'
            })

            .otherwise({
                templateUrl: './templates/templateMain.html',
                controller: 'templateMainController'
            });

});

app.controller('templateOneController', ['$scope', function ($scope) {
        $scope.title = 'templateOne working!';
    }]);

app.controller('templateTwoController', ['$scope', function ($scope) {
        $scope.title = 'templateTwo working!';
    }]);

app.controller('templateMainController', ['$scope', function ($scope) {
        $scope.title = 'templateMain working!';
    }]);

app.controller('mainController', ['$scope', function ($scope) {
        $scope.title = 'ng working!';
    }]);
