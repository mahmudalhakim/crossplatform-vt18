// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Här kommer vi att skapa egna controllers

/*
  En controller som används av appen
  Tärningskast
*/

.controller("DiceController" , function($scope){

  $scope.imgArray = [
    "inverted-dice-1.png",
    "inverted-dice-2.png",
    "inverted-dice-3.png",
    "inverted-dice-4.png",
    "inverted-dice-5.png",
    "inverted-dice-6.png"
  ]
  $scope.doRefresh = function(){

    // rand används i flik 1
    $scope.rand = Math.floor(Math.random() * 6 ) +1;

    // rand2 används i flik 2
    $scope.rand2 = Math.floor(Math.random() * 6 ) +1;

    $scope.diceImg = $scope.imgArray[$scope.rand-1];

    $scope.$broadcast('scroll.refreshComplete');
  }
})

// En controller som hanterar reorder
.controller("ReorderController", function($scope){
  $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  $scope.moveItem =
    function(item, fromIndex, toIndex){
    console.log("Element: " + item);
    console.log("From: " + fromIndex);
    console.log("To: " + toIndex);
    // Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0 , item);
  }
})



