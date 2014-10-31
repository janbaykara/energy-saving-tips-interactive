app.factory('SomeService', function() {
  return function name(){
    // ...
  };
})

app.factory('Data', function($q, $timeout, $http) {
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
