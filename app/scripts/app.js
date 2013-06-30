'use strict';

angular.module('hexabonesApp', ['ngResource']).config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'Shop'
  }).otherwise({
    redirectTo: '/'
  });
});
