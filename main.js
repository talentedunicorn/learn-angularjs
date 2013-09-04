var app = angular.module("app", []);

app.controller("AppCtrl", function($scope) {
	console.log("Controller scope: ", $scope);
})

app.directive("mydirective", function() {
	return {
		link: function(scope, element, attrs) {
			console.log("Directive scope: ", scope);
			console.log("Directive element: ", element);
		}
	}
})

// '$scope' in the controller is a global provider while 'scope' can be renamed to anything and still work
