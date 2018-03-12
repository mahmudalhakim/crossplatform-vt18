var app = angular.module("myApp" , []);
    app.controller("myCtrl", function($scope){
        $scope.firstName = "Mahmud";
        $scope.lastName = "Al Hakim";
        $scope.fullname = function(){
            return $scope.firstName + " " + $scope.lastName;
        }
});