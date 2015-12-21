angular.module('resources.world')
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/worlds',{
        templateUrl:"app/components/client/world/world-list.html",
        controller:'WorldController',
        resolve:{
            worlds:['Worlds', function(Worlds){
              return Worlds.all();
            }]
        }
    });

}])
.controller('WorldController', ['$scope', 'worlds', function($scope,worlds){
    $scope.worlds = worlds;
}]);