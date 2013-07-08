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

angular.module('hexabonesApp')
.filter('getChild', function() {
  return function(start){
      var log = [];
      angular.forEach(start, function(value, key){
        if( Object.prototype.toString.call(value) === '[object Object]' ) {
        angular.forEach(value, function(value, key){
          log.push(value);
        })
      }else {
        log.push(value);
      }
    } );
    return log;
  }
});