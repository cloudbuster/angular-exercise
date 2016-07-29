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
	
	$scope.register = function(){
		console.log("Success");	
		console.log($scope.reg);
		// JSON stringiksi (localStorage("key", JSON.stringify(myJson)), 
		// stringi JSONiksi JSON.parse(localStorage(getItem('person');
		console.log(JSON.stringify($scope.reg));
		localStorage("person", JSON.stringify($scope.reg));
	};

}]);

app.controller('templateTwoController', ['$scope', '$resource', '$http', function ($scope, $resource, $http) {
        $scope.title = 'templateTwo working!';

	var onDataLoaded = function (response) {
		$scope.persons = response.data;
		console.log("Success!");
	};

	var onError = function (reason) {
		console.log("Didn't work. Error." + reason.data);
	};

	$http.get('./api/list.json')
		.then(onDataLoaded, onError);
}]);
	
	app.controller('templateMainController', ['$scope', function ($scope) {
			$scope.title = 'templateMain working!';
		}]);
	
	app.controller('mainController', ['$scope', function ($scope) {
			$scope.title = 'ng working!';
		}]);
