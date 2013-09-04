var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/:country/:state', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl"
		})
})

app.controller("AppCtrl", function($scope, $routeParams){
	$scope.model = {
		// message: "I am a message"
		message: "Address: " + $routeParams.state + ", " + $routeParams.country
	} 
})