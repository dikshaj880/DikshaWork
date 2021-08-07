var app = angular.module('myApp');

app.controller('HomeController', function(
  $scope,
  $rootScope,
  $stateParams,
  $state,
  LoginService
) {
  $scope.user = $rootScope.userName;
  $scope.data = {
    Name: '',
    Phone: null,
    Country: null,
    Companies: null
  };
});
