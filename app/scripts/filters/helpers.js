'use strict';

angular.module('hexabonesApp')
.filter('with', function() {
  return function(items, field) {
    var result = {};
    angular.forEach(items, function(value, key) {
      if (value.hasOwnProperty(field)) {
        result[key] = value;
      }
    });
    return result;
  };
});

angular.module('hexabonesApp')
.filter('without', function() {
  return function(items, field) {
    var result = {};
    angular.forEach(items, function(value, key) {
      if (!value.hasOwnProperty(field)) {
        result[key] = value;
      }
    });
    return result;
  };
});


angular.module('hexabonesApp')
.filter('imagePath', function() {
  return function(input) {
    if (input){
      var str = input;
      var result = str.split('');
      var path = '';
      for (var i in result){
        path += result[i]+'/';
      }
      path = path+input;
    }
    return path;
  };
});