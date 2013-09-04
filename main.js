var app = angular.module("myApp", []);

app.factory("game", function(){ // This is a provider
	return {
		title: "Super Meat Boy!"
	}
})


angular.injector(["myApp"]).invoke(function(game){ // Passes providers into functions (** 1 injector per module)
	console.log(game.title);
})

app.controller("AppCtrl", function($scope, game){ 
	$scope.title = game.title
})
