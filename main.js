var app = angular.module("myApp", []);


app.controller("AppCtrl", function($scope) {
	
})

app.directive("panel", function(){
	return {
		restrict: "E",
		transclude: true, // Append DOM contents inside element 
		template: '<div class="panel" ng-transclude>This is my panel</div>'
	}
})