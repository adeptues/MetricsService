var phonecatControllers = angular.module('metricsControllers', ['metricServices']);
 
phonecatControllers.controller('MainCtrl', ['$scope', '$http', 'urlService',
  function ($scope, $http,urlService) {
  /*
     urlService.asyncData().then(function(data){
        $scope.urls = data;
     });*/
     $http.get('/metricsview/urls').success(function(data){
        $scope.urls = data;
     });


  }]);
 
