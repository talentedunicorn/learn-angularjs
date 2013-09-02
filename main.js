var app = angular.module("superhero", []);

app.directive('superman', function() {
	return {
		restrict: "A", // A = Attribute, C = Class, E = Element, M = Comment
		link: function() {
			alert("Wooo");
		}		
	}
})