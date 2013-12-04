var phonecatApp = angular.module('metrics', [
  'ngRoute',
  'metricsControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);