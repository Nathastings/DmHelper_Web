angular.module('resources.world')

.controller('WorldController', ['$scope', 'worlds', function($scope,worlds){
    $scope.worlds = worlds;
}]);