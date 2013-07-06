'use strict';

angular.module('hexabonesApp')
.factory('DataSource', ['$http',function($http){
  return {
    get: function(source,WS_KEY,callback){
      $http({
        url: source,
        method: 'GET',
        params: {ws_key:WS_KEY}
      }).
      success(function(data, status) {
        //console.log('Request succeeded');
        callback(data);
      }).
      error(function(data, status) {
        console.log('Request failed ' + status);
      });
    }
  };
}]);
