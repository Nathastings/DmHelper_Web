angular.module('resources.world', ['dmHelperApi']);
angular.module('resources.world').factory('Worlds',['dmHelperApi', function($dmHelperApi){
    var Worlds = $dmHelperApi('world'); //after this point, if I want to extend my world class I do so.
    return Worlds;
}]);