angular.module('resources.campaign')
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/campaigns',{
        templateUrl:"app/components/client/campaign/campaign-list.html",
        controller:'CampaignController',
        resolve:{
            campaigns:['Campaigns', function(Campaigns){
                return Campaigns.all();
            }]
        }
    });
}])
.controller('CampaignController',['$scope','campaigns', function($scope,campaigns){
    $scope.campaigns = campaigns;
}]);