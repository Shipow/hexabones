'use strict';

angular.module('hexabonesApp')
.controller('Shop', ['$scope','DataSource','ProductsFactory',
    function($scope, DataSource, ProductsFactory) {



        var shopData = function(data) {$scope.prestashop = data;};
        DataSource.get(WS_SOURCE,WS_KEY,shopData);

        var catData = function(data) {$scope.categories = data;};
        DataSource.get(WS_SOURCE+'/categories?display=full',WS_KEY,catData);

        $scope.catalog = ProductsFactory.getAll();

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'Bootstrap 3 SASS',
            'Font-Awesome',
            'AngularJS',
            'Angular-UI',
            'HAML',
            'Karma',
            'jQuery 1.9'];

        $scope.search = {};

        $scope.filterCategory = function(categoryId){
            if(categoryId===false){
                $scope.query = null;
                $scope.search= null;
            } else {
                $scope.search={'associations.categories.category':categoryId};
                $scope.query = $scope.catNameById(categoryId);
            }

        }

        $scope.catNameById = function(id){
            var catName = '';
            angular.forEach($scope.categories.categories.category, function(value, key){
                if(value.id===id){
                    catName =(value.name.language);
                }
            },catName);
            return catName;
        }
    }
]);