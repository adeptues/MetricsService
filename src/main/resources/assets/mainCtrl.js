var phonecatControllers = angular.module('metricsControllers', ['metricServices']);
 
phonecatControllers.controller('MainCtrl', ['$scope', '$http', 'urlService',
  function ($scope, $http,urlService) {
    $scope.hello = 'world';
    $scope.world = urlService.sayHello;

  }]);
 
