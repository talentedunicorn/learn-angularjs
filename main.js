var app = angular.module("app", []);
app.directive("dumbpassword", function() {
	var validElement = angular.element("<div>{{model.input}}</div>");

	var link = function(scope) {
		scope.$watch("model.input", function (value) {
			if(value == "password") {
				validElement.toggleClass("alert-box alert");
			}
		})
	}

	return {
		restrict: "E",
		replace: true,
		template: "<div><input type='text' ng-model='model.input' /></div>",
		compile: function (tElem) { // tElem = The template element
			tElem.append(validElement);

			return link;
		}
	}
});