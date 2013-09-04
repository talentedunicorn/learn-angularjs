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


app.directive("error", function($rootScope){
	return {
		restrict: "E", 
		template: "<div class='alert-box alert' ng-show='isError'>Error 666: The world is ending!!</div>",
		link: function(scope) {
			$rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
				scope.isError = true;
			})
		}
	}
})

app.controller("AppCtrl", function($rootScope){ // Don't use $rootScope unless it's using an angular component
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
		// defer.resolve();
		defer.reject();
	}, 1000); // Wait 2 seconds then resove the promise
	return defer.promise;
}