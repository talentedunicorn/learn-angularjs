var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl"
		})
		.when('/pizza', {
			template: "Yum!!"
		})
		.otherwise({
			// redirectTo: "/"
			template: "You on the wrong side of the moon!"
		})
})

app.controller("AppCtrl", function($scope, $route){
	$scope.model = {
		message: "App controller yo!"
	}
})