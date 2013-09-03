var app = angular.module("phoneApp", []);


app.controller("AppCtrl", function($scope) {
	$scope.callHome = function (message) {
		console.log("I called home and left this message: " + message);
	}
})

app.directive("phone", function(){
	return {
		restrict: "E",
		template: "<input type='text' ng-model='value' />" + "<div class='button' ng-click='dial({message:value})'>Call Home!</div>",
		scope: {
			dial: "&" // Passes from directive to controller even in isolated scopes
		}
	}
})