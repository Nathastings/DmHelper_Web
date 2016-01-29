angular.module('client_app',['ngRoute','resources.world','resources.campaign']);
angular.module('client_app').constant('API_CONFIG', {
    baseUrl: 'https://localhost:44300/',
    dbPath: 'api/'
});

angular.module('client_app').config(['$routeProvider', '$httpProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/worlds'});
}]);

angular.module('client_app').controller('HeaderController',['$scope',function($scope){
}]);