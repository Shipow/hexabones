'use strict';

angular.module('hexabonesApp')
.controller('Shop', ['$scope','DataSource','ProductsFactory',
  function($scope, DataSource, ProductsFactory) {

    $scope.awesomeThings = ['HTML5 Boilerplate', 'Bootstrap 3 SASS', 'Font-Awesome', 'AngularJS', 'Angular-UI', 'HAML', 'CoffeeScript', 'Karma'];

    var shopURL = 'http://cloud.capasite.fr';
    var WS_SOURCE = shopURL+'/api';
    var WS_KEY = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';

    $scope.shopURL = shopURL;

    var setData = function(data) { $scope.prestashop = data; };

    DataSource.get(WS_SOURCE,WS_KEY,setData);

    $scope.products = ProductsFactory.getAll();

    console.log($scope.products);

  }
]);