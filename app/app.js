var myApp = angular.module("myApp", []);

myApp.controller("MainController", ['$scope', '$http', function($scope, $http){

  $http.get('data/data.json').then(function(response){
    $scope.bookings = response.data;
    $scope.book = response.data.appointments.appointment.city.name;
  });

}]);
