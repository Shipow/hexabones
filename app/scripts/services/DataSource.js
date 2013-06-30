'use strict';

angular.module('hexabonesApp')
.factory('DataSource', ['$http',function($http){
  return {
    get: function(source,ws_key,callback){
      $http({
        url: source,
        method: 'GET',
        params: {ws_key:ws_key}
      }).
      success(function(data, status) {
        console.log('Request succeeded');
        callback(data);
      }).
      error(function(data, status) {
        console.log('Request failed ' + status);
      });
    }
  };
}]);
