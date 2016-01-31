(function (window,angular){
    'use strict';
    angular.module('client_app',['ngRoute','resources.world','resources.campaign','resources.auth']);
    angular.module('client_app').constant('API_CONFIG', {
        baseUrl: 'https://localhost:44300/',
        dbPath: 'api/'
    });

    angular.module('client_app').config(['$routeProvider', function($routeProvider){
        //.config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/worlds',{
                templateUrl:"app/components/client/world/world-list.html",
                controller:'WorldController',
                resolve:{
                    worlds:['Worlds', function(Worlds){
                        return Worlds.all();
                    }]
                }
            });

        //}])
        $routeProvider.otherwise({redirectTo:'/worlds'});
    }]);

    angular.module('client_app').config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push(function($q, $rootScope, $window, $location){
            return {
                request: function (config) {

                    return config;
                },
                requestError: function (rejection) {

                    return $q.reject(rejection);
                },
                response: function (response) {
                    if (response.status == "401") {
                        $location.path('/login');
                    }
                    //the same response/modified/or a new one need to be returned.
                    return response;
                },
                responseError: function (rejection) {

                    if (rejection.status == "401") {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }]);

    angular.module('client_app').controller('HeaderController',['$scope',function($scope){
    }]);
})(window,window.angular);
