var app = angular.module("choreApp", []);


app.controller("ChoreCtrl", function($scope) {
	$scope.logChore = function(chore) {
		if(chore) {
			console.log(chore + " is done!");
		}
	}
})

app.directive("kid", function(){
	return {
		restrict: "E",
		// scope: {}, // To isolate the scope, so each element has it's own scope
		scope: {
			done: "&"
		},
		template: "<div><input type='text' ng-model='chore' />" + "<p>{{chore}}</p>" +
		"<a class='button' ng-click='done({chore:chore})'>Done</a></div>"
	}
})

app.directive