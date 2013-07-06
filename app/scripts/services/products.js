'use strict';

angular.module('hexabonesApp')
.factory('ProductsFactory', function($http, $resource) {
  var data = $resource(WS_SOURCE+'/products/:productId', {ws_key:WS_KEY},{
    getAll: {method:'GET', params:{display:'full'}},
    query: {method:'GET', params:{productId:'@id'}}
  });
  return data;
});