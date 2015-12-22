angular.module('resources.campaign', ['dmHelperApi']);
angular.module('resources.campaign').factory('Campaigns',['dmHelperApi', function($dmHelperApi){
    var Campaigns = $dmHelperApi('campaign');
    return Campaigns;
}]);