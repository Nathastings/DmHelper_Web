angular.module('client_app').directive('header', function(){
    return {
        restrict: 'E',
        templateUrl: "app/shared/header/headerView.html",
        controller: 'HeaderController'
    };
});