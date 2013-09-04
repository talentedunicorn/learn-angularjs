var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl",
			resolve: {
				loadData: appCtrl.loadData,
				prepData: appCtrl.prepData
			}
		})
})

var appCtrl = app.controller("AppCtrl", function($scope, $route){
	console.log($route)
	
	$scope.model = {
		message: "I am an APP o.O"
	} 
})

appCtrl.loadData = function ($q, $timeout) {
	var defer = $q.defer();
	$timeout(function(){
		defer.resolve("loadData");
		// console.log()
	}, 2000); // Wait 2 seconds then resove the promise
	return defer.promise;
}

appCtrl.prepData = function ($q, $timeout) {
	var defer = $q.defer();
	$timeout(function(){
		defer.resolve("prepData");
		// console.log()
	}, 2000); // Wait 2 seconds then resove the promise
	return defer.promise;
}