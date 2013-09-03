var app = angular.module("drinkApp", []);


app.controller("AppCtrl", function($scope) {
	$scope.ctrlFlavor = 'blackberry'
})

app.directive("drink", function(){
	return {
		restrict: "E",
		template: "<input type='text' ng-model='flavor'/>",
		scope: {
			flavor: "=" // Passes object to scope
		}
	}
})