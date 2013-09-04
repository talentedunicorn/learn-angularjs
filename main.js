var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl",
			resolve: {
				app: function ($q, $timeout) {
					var defer = $q.defer();
					$timeout(function(){
						defer.resolve();
					}, 2000); // Wait 2 seconds then resove the promise
					return defer.promise;
				}
			}
		})
})

app.controller("AppCtrl", function($scope, $q){

	$scope.model = {
		message: "I am an APP o.O"
	} 
})