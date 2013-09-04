var app = angular.module("myApp", []);


app.config(function($provide){
	$provide.provider("game", function(){
		return {
			$get: function() {
				return {
					title: "Super Meat Boy!"
				}	
			}
		}
	})
})


// app.factory("game", function(){
// 	return {
// 		title: "Super Meat Boy!"
// 	}
// })

app.controller("AppCtrl", function($scope, game){ 
	$scope.title = game.title
})
