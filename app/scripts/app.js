'use strict';

//settings
var shopURL = 'http://cloud.capasite.fr';
var WS_KEY = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';
var WS_SOURCE = shopURL+'/api';

angular.module('hexabonesApp', ['ngResource']).config(function($routeProvider) {
  return $routeProvider
  .when('/:catId', {
    templateUrl: 'views/main.html',
    controller: 'Shop'
  })
  .when('/products/:productId', {
    templateUrl: 'views/product.html',
    controller: 'Product'
  })
  .otherwise({
    redirectTo: '/'
  });
});


// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).