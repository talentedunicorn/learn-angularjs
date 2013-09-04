var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl"
		}
	)
})

app.controller("AppCtrl", function($scope){
	$scope.model = {
		message: "App controller yo!"
	}
})