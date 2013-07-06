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
  return function(imageId) {
    if (imageId){
      var str = imageId;
      var result = str.split('');
      var path = '';
      for (var i in result){
        path += result[i]+'/';
      }
      var imageURL = shopURL+'/img/p/'+path+imageId+'-home_default.jpg';
      return imageURL;
    }
  };
});