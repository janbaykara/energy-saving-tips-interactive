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
