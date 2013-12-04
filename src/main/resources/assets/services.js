var metricsServices = angular.module('metricServices',[]);

metricsServices.service('urlService',['$http',function($http){
//need to make this poll
    this.asyncData = function(){
    var promise = $http.get('/metricsjson').success(function(data){
                    console.log(data);
                    return data;
        });
                return promise;
    };


}]);