var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "ViewCtrl",
			resolve: {
				loadData: viewCtrl.loadData
			}
		})
})

app.controller("AppCtrl", function($rootScope){
	$rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
		console.log("Event: ", event)
		console.log("Current: ", current)
		console.log("Previous: ", previous)
		console.log("Rejection: ", rejection)
	})
})

var viewCtrl = app.controller("ViewCtrl", function($scope, $route){
	console.log($route)

	$scope.model = {
		message: "I am an APP o.O"
	} 
})

viewCtrl.loadData = function ($q, $timeout) {
	var defer = $q.defer();
	$timeout(function(){
		defer.reject("Error 666: The world is ending");
		// console.log()
	}, 1000); // Wait 2 seconds then resove the promise
	return defer.promise;
}