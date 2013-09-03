var app = angular.module("myApp", []);

var controllers = {}

controllers.AppCtrl = function($scope) {
	
	this.sayHi = function () {
		alert('Hi!');
	}

	return $scope.AppCtrl = this;
}

app.controller(controllers);


var directives = {}

directives.panel = function() {
	return {
		restrict: "E",
		template: '<h1>Panel</h1>'
	}
}

app.directive(directives);