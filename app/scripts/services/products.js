'use strict';

angular.module('hexabonesApp')
.factory('ProductsFactory', function($resource) {
  var ws_source = 'http://cloud.capasite.fr/api/products/:productId';
  var ws_key = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';
  var product = $resource(ws_source, { ws_key:ws_key},{
    getAll: {method:'GET', isArray:true},
    query: {method:'GET', params:{ productId:'@id'}}
  });
  return product;
});