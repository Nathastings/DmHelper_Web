(function(window,angular){
    'use strict';
    angular.module('resources.storage',['LocalStorageModule']);
    angular.module('resources.storage').config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('dmHelper');
        localStorageServiceProvider.setStorageCookie(7,'/');

    });

    angular.module('resources.storage').factory('storageFactory',function(localStorageService){
        var Storage = function(key) {

            var StorageSource = {};

            StorageSource.save = function (data) {
                localStorageService.set(key, data);
            }

            StorageSource.get = function () {
                localStorageService.get(key);
            }

            StorageSource.remove = function(){
                localStorageService.remove(key);
            }
            return StorageSource;
        };
        return Storage;
    });
})(window,window.angular)