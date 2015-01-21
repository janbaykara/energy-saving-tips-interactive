angular.module('app').factory('Data', function($q, $timeout, $http) {
    var data;
    var matrix = {
        fetch: function(callback) {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('public/scripts/data.json').success(function(json) {
                    deferred.resolve(json);
                    data = json;
                });
            }, 30);

            return deferred.promise;
        },
        get: function(callback) {
            return data;
        }
    };

    return matrix;
});

angular.module('app').factory('Utils', function() {
  return {
    toSlug: function(str) {
      // str = str.replace(/[^a-zA-Z0-9\s]/g,"");
      str = str.toLowerCase();
      str = str.replace(/\s/g,'-');
      return str;
    }
  }
});

angular.module('app').factory('TipImage', function() {
  var noImages = [];
  var tip = "x";
  return {
    checkImage: function(plan,tip) {
      var xxx = true;
      // console.log(noImages,plan,tip)
      _.each(noImages, function(img) {
        if(img == plan+"-"+tip) {
          console.log("found no IMAGE");
          xxx = false;
        }
      })
      if(xxx) console.log("hassss IMAGE");
      return xxx;
    },
    noImage: function(plan,tip) {
      // console.log("DOES NOT HAVE IMAGE");
      noImages.push([plan,tip].join("-"));
    },
    setTip: function(x) {
      // console.log(x)
      tip = x;
    },
    getTip: function(x) {
      // console.log(x)
      return tip;
    }
  }
});

