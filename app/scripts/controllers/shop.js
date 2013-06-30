'use strict';

angular.module('hexabonesApp')
.controller('Shop', ['$scope','DataSource','ProductsFactory',
  function($scope, DataSource, ProductsFactory) {

    $scope.awesomeThings = ['HTML5 Boilerplate', 'Bootstrap 3 SASS', 'Font-Awesome', 'AngularJS', 'Angular-UI', 'HAML', 'CoffeeScript', 'Karma'];

    var ws_source = 'http://cloud.capasite.fr/api';
    var ws_key = 'M7Z2NP25E7RO0JSJBZRU9OG4AKDZZTW3';
    var setData = function(data) { $scope.prestashop = data; };
    DataSource.get(ws_source,ws_key,setData);

    var products = ProductsFactory.getAll(function(){
      $scope.productsLength = products[0].product.length;
      $scope.product = {};
      for( var items in products[0].product){
        var id = (products[0].product[items].attributes.id);
        $scope.product[id] = ProductsFactory.query({productId:id});
      }
    });
  }
]);