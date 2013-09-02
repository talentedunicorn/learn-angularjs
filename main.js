var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function() {
    var Avengers = {};

    Avengers.cast = [{
        "Character": "Tony Stark / Iron Man",
        "Name": "Robert Downey Jr."
    }, {
        "Character": "Steve Rogers / Captain America",
        "Name": "Chris Evans"
    }, {
        "Character": "Bruce Banner / The Hulk",
        "Name": "Mark Ruffalo"
    }, {
        "Character": "Thor",
        "Name": "Chris Hemsworth"
    }, {
        "Character": "Natasha Romanoff / Black Widow",
        "Name": "Scarlett Johansson"
    }, {
        "Character": "Clint Barton / Hawkeye",
        "Name": "Jeremy Renner"
    }, {
        "Character": "Loki",
        "Name": "Tom Hiddleston"
    }, {
        "Character": "Agent Phil Coulson",
        "Name": "Clark Gregg"
    }, {
        "Character": "Agent Maria Hill",
        "Name": "Cobie Smulders"
    }, {
        "Character": "Selvig",
        "Name": "Stellan Skarsgard"
    }, {
        "Character": "Nick Fury",
        "Name": "Samuel L. Jackson"
    }, {
        "Character": "Pepper Potts",
        "Name": "Gwyneth Paltrow"
    }, {
        "Character": "Jarvis (voice)",
        "Name": "Paul Bettany"
    }, {
        "Character": "The Other",
        "Name": "Alexis Denisof"
    }, {
        "Character": "NASA Scientist",
        "Name": "Tina Benko"
    }];

    return Avengers;

})



function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;

}
