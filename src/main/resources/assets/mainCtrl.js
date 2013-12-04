var phonecatControllers = angular.module('metricsControllers', []);
 
phonecatControllers.controller('MainCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.hello = 'world';

  }]);
 
