'use strict';

angular.module('hexabonesApp')
.factory('ProductsFactory', function($http, $resource) {
  var WS_SOURCE = 'http://cloud.capasite.fr/api/products/:productId';
  var WS_KEY = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';
  var product = $resource(WS_SOURCE, { ws_key:WS_KEY,display:'full'},{
    getAll: {method:'GET', isArray:true},
    query: {method:'GET', params:{ productId:'@id'}}
  });
  return product;
});