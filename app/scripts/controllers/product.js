'use strict';

angular.module('hexabonesApp')
.controller('Product', ['$scope','$routeParams','ProductsFactory',
  function($scope, $routeParams, ProductsFactory) {

    $scope.product = ProductsFactory.query({productId:$routeParams.productId});

    console.log( $scope.product );
  }
]);


angular.module('hexabonesApp')
.directive('siteheader', function () {
    return {
        restrict: 'E',
        template: '<button class="btn">{{back}}</button>',
        scope: {
            back: '@back',
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
        }
    };
});
