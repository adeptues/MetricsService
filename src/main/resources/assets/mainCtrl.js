var phonecatControllers = angular.module('metricsControllers', ['metricServices']);
 
phonecatControllers.controller('MainCtrl', ['$scope', '$http', 'urlService',
  function ($scope, $http,urlService) {
     urlService.async().then(function(d){
        $scope.urls = d;
     });
  }]);
 
