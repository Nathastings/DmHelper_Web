(function(window,angular){
    'use strict';
    angular.module('resources.auth',['resources.storage']);
    angular.module('resources.auth').service('AuthService',['$http','$q','$window','storageFactory',function($http,$q,$window,$storageFactory){
        var tokenInfo;
        var storageManager = $storageFactory('authToken');

        this.setTokenInfo = function (data){
            tokenInfo = data;
            storageManager.save(tokenInfo);
        }


    }]);
})(window,window.angular);