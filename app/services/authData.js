(function(window,angular){
    'use strict';
    angular.module('client_app').factory('authData',[function(){
        var authDataFactory = {};
        var _authentication = {
            IsAuthenticated: false,
            userName: ""
        };

        authDataFactory.authenticationData = _authentication; //return my usn and a flag indicating they are logged in.
    }]);
})(window,window.angular);