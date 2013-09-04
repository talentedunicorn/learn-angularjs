var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl"
		})
})

app.controller("AppCtrl", function($scope, $q){

	var defer = $q.defer();

	defer.promise
	.then(function(weapon) {
		alert("You can have my " + weapon)
		return "axe"
	})
	.then(function(weapon) {
		alert("And my " + weapon)
		return "sword"
	})
	.then(function(weapon) {
		alert("Also my " + weapon)
	})

	defer.resolve("Gun");

	$scope.model = {
		message: "I am an APP o.O"
	} 
})