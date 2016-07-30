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

app.service('myService', function(){
	this.tempStorage = new Array();
});

app.controller('templateOneController', ['$scope', 'myService', function ($scope, myService) {
		
	$scope.title = 'templateOne working!';

	$scope.register = function(){
		// JSON stringiksi (localStorage("key", JSON.stringify(myJson)), 
		// stringi JSONiksi JSON.parse(localStorage(getItem('person');
		myService.tempStorage.push($scope.reg);

		console.log("$scope.reg:" + JSON.stringify($scope.reg));
		console.log("myService.tempStorage: " + JSON.stringify(myService.tempStorage));
	};

}]);

app.controller('templateTwoController', ['$scope', '$resource', '$http', 'myService', function ($scope, $resource, $http, myService) {
	
	$scope.title = 'templateTwo working!';

	var onDataLoaded = function (response) {
		$scope.persons = response.data;
		console.log('Data loading was a success!');
	};

	var onError = function (reason) {
		console.log('Error, data could not be loaded.' + reason.data);
	};

	$http.get('./api/list.json')
		.then(onDataLoaded, onError);

	$scope.fromService = myService.tempStorage;
	console.log("***** tempStorage :" + myService.tempStorage[0].firstName);
}]);
    
app.controller('templateMainController', ['$scope', function ($scope) {
	$scope.title = 'templateMain working!';
}]);

app.controller('mainController', ['$scope', function ($scope) {
	$scope.title = 'ng working!';
}]);
