var app = angular.module("myApp", []);

app.directive("zippy", function(){
	return {
		restrict: "E",
		transclude: true,
		scope: {
			title: "@",
			content: "@"
		},
		template: '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>',
		link: function(scope) {
			scope.isContentVisible = false;

			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	}
})