app.controller('AppController', function($scope) {

});

app.controller('BlueprintController', function($state,$scope,Data) {
  Data.fetch().then(function(data) {
    $scope.Data = data;
    $scope.blueprint = _.filter($scope.Data.blueprints, function(blueprint) {
      return blueprint.id == $state.current.name;
    })[0];
  });
});
