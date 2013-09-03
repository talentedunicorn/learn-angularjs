var app = angular.module("drinkApp", []);


app.controller("AppCtrl", function($scope) {
	$scope.ctrlFlavor = 'blackberry'
})

app.directive("drink", function(){
	return {
		restrict: "E",
		template: "<div>{{flavor}}</div>",
		scope: {
			flavor: "@" // Passes the attribute as a string to the scope
		}//,
		// link: function (scope, element, attrs) {
		// 	scope.flavor = attrs.flavor;
		// }
		
	}
})

app.directive