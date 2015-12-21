angular.module('dmHelperApi', [])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
])
.factory('dmHelperApi',['API_CONFIG','$http', function(API_CONFIG,$http){
    function DmHelperApi(collectionName){
        var url = API_CONFIG.baseUrl + API_CONFIG.dbPath+collectionName;

        /*
         *   so this here function is going to handle what happens when I actually call my API.
         *   The Params are:
         *   my object returned from my call to $http.
         *   any additional success and failure callback functions (hence the cb on the vars)
         *   a simple flag indicating if I am returning a lot of this resource.
         */
        var thenFactoryMethod = function(httpPromise, successcb,errorcb, isArray){
            var scb = successcb || angular.noop; //if I don't have a success function then DO NOTHING!
            var ecb = errorcb || angular.noop; //same for error

            return httpPromise.then(function(response){
                var result;
                if(isArray){
                    result = [];
                    for(var i = 0; i < response.data.length; i++){
                        result.push(new Resource(response.data[i]));
                    }
                }else{
                    result = new Resource(response.data);
                }
                scb(result,response.status,response.headers,response.config);
                return result;
            }, function(response){ //as how $q works, this will be the error callback area of my promise.
                ecb(undefined,response.status,response.headers,response.config);
                return undefined; //nada returned.
            });
        };

        var Resource = function(data){
            angular.extend(this,data);//so my resource ends up being this here function along WITH the props returned in data.
        }

        Resource.all = function(successcb, errorcb){
            var httpPromise = $http.get(url+'/all',{});
            return thenFactoryMethod(httpPromise,successcb,errorcb,true);
        }

        return Resource;
    }

    return DmHelperApi;
}]);