var app = angular.module("myApp", []);


app.controller("AppCtrl", function($scope) {
	
	this.sayHi = function () {
		alert('Hi!');
	}

	return $scope.AppCtrl = this;
})