app.controller('AppController', function($scope,Data) {
  Data.fetch().then(function(data) {
    $scope.Data = data;
  });
});

app.controller('BlueprintController', function($scope,$stateParams,Data,Utils) {
  $scope.Utils = Utils;

  Data.fetch().then(function(data) {
    $scope.Data = data;

    $scope.blueprint = _.filter($scope.Data.blueprints, function(blueprint) {
      return blueprint.slug == $stateParams.blueprintSlug;
    })[0];
  });
});

app.controller('TipController', function($scope,$stateParams,Data) {
  $scope.tip = $stateParams.tip;

  Data.fetch().then(function(data) {
    $scope.tip = _.filter($scope.blueprint.tips, function(tip) {
      return tip.id == $stateParams.tipSlug;
    })[0];

    var i = $scope.tip.i = $scope.blueprint.tips.indexOf($scope.tip);

    if(i == 4)
      $scope.tip.last == true;
    else
      $scope.tip.next = $scope.blueprint.tips[i+1];

    if(i == 0)
      $scope.tip.first == true;
    else
      $scope.tip.prev = $scope.blueprint.tips[i-1];
  });
});
