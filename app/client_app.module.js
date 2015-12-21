angular.module('client_app',['ngRoute','resources.world']);
angular.module('client_app').constant('API_CONFIG', {
    baseUrl: 'http://localhost:61919/',
    dbPath: 'api/'
});

angular.module('client_app').config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/worlds'});
}]);

angular.module('client_app').controller('HeaderController',['$scope',function($scope){

}]);