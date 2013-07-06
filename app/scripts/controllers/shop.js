'use strict';

angular.module('hexabonesApp')
.controller('Shop', ['$scope','DataSource','ProductsFactory',
  function($scope, DataSource, ProductsFactory) {

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'Bootstrap 3 SASS',
        'Font-Awesome',
        'AngularJS',
        'Angular-UI',
        'HAML',
        'Karma'];

    var shopData = function(data) {$scope.prestashop = data;};
    DataSource.get(WS_SOURCE,WS_KEY,shopData);

    $scope.catalog = ProductsFactory.getAll();
  }
]);