var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: "view/app.html",
			controller: "AppCtrl"
		}).
		when('/pizza', {
			template: "<h3>Did anyone order pizza?!</h3>"
		}).
		when('/burger/:size/:drink', {
			redirectTo: function(routeParams, path, search) {
				console.log(routeParams)
				console.log(path)
				console.log(search)

				if(!routeParams.drink == "") {
					console.log(routeParams.drink);
					return "/orders/checkout/"
				}else {
					console.log("No drink selected");
					return "/orders/sets/" + routeParams.size
				}
	
			}
		}).
		when('/orders/sets/:size', {
			template: '<h3>Sets menu</h3>'
		}).
		when('/orders/checkout', {
			template: "<h3>Thanks for shopping with us, see you next time!</h3>"
		}).
		otherwise({
			redirectTo: "/"
		})
})

app.controller("AppCtrl", function($scope, $routeParams){
	$scope.model = {
		message: "I am a message"
		// message: "Address: " + $routeParams.state + ", " + $routeParams.country
	} 
})