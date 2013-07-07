'use strict';

//settings
var shopURL = 'http://cloud.capasite.fr';
var WS_KEY = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';
var WS_SOURCE = shopURL+'/api';

angular.module('hexabonesApp', ['ngResource']).config(function($routeProvider) {
  return $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'Shop'
  })
  .when('/products/:productId', {
    templateUrl: 'views/product.html',
    controller: 'Product',
  })

  .otherwise({
    redirectTo: '/'
  });
});
