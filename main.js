var app = angular.module("myApp", []);

app.directive("zippy", function(){
	return {
		restrict: "E",
		transclude: true,
		scope: {
			title: "@",
			content: "@"
		},
		templateUrl: "templates/zippy.html",
		link: function(scope) {
			scope.isContentVisible = false;

			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	}
})