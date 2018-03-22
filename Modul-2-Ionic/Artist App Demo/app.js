angular.module('ArtistApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// My Controllers
.controller("ListController",function($scope,$http){

  // Hämta JSON-listan via HTTP
  $http.get('../model/data.json')
       .success(function(data){
         $scope.artists = data;
        })

  // Metoden reorderItem som används i knappen reorder
  $scope.reorderItem = function(item, fromIndex, toIndex){
    $scope.artists.splice(fromIndex, 1);
    $scope.artists.splice(toIndex, 0 , item);

  }

})

