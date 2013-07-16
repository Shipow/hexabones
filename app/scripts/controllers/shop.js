'use strict';

angular.module('hexabonesApp')
.controller('Shop', ['$scope','DataSource', 'ProductsFactory','$routeParams', '$location','$route',
    function($scope, DataSource, ProductsFactory, $routeParams, $location, $route) {

        
        var shopData = function(data) {$scope.prestashop = data;};
        DataSource.get(WS_SOURCE,WS_KEY,shopData);

        var catData = function(data) {$scope.categories = data;};
        DataSource.get(WS_SOURCE+'/categories?display=full',WS_KEY,catData);

        $scope.catalog = ProductsFactory.getAll(
            function(){
                if($routeParams.catId){
                    $scope.filterCategory($routeParams.catId);
                }
            }
        );

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
                $('#categories .active').removeClass('active');
                $location.path('/');
                $scope.$on('$locationChangeSuccess', function(event) {
                    $route.current = lastRoute;
                });
            } else {
                $scope.search={'associations.categories.category':categoryId};
                $scope.query = $scope.catNameById(categoryId);
                $scope.selected = categoryId;
                $location.path('/'+categoryId);
                var lastRoute = $route.current;
                $scope.$on('$locationChangeSuccess', function(event) {
                    $route.current = lastRoute;
                });
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

        $scope.isSelected = function(id) {
            return $scope.selected === id;
        }

        $scope.cart =[];
        $scope.addItem = function(product,quantity) {
            
            function cartItem(product, quantity) {
                this.id = product.id;
                this.name = product.name;
                this.quantity = quantity * 1;
            }

            function toNumber(value) {
                value = value * 1;
                return isNaN(value) ? 0 : value;
            };

            quantity = toNumber(quantity);
            if (quantity != 0) {
                var found = false;
                for (var i = 0; i < $scope.cart.length && !found; i++) {
                    var item = $scope.cart[i];
                    if (item.id == product.id) {
                        found = true;
                        item.quantity = toNumber(item.quantity + quantity);
                        if (item.quantity <= 0) {
                            this.item.splice(i, 1);
                        }
                    }
                }
                if (!found) {
                    var item = new cartItem(product, quantity);
                    $scope.cart.push(item);
                }
            //todo : save to local storage
            }
        };
    }
]);