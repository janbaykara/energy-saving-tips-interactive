app.controller('AppController', function($scope,Data) {
  Data.fetch().then(function(data) {
    $scope.Data = data;
  });
});

app.controller('BlueprintController', function($scope,$state,$stateParams,$timeout,$interval,Data,Utils) {
  $scope.Utils = Utils;
  $scope.state = $state;

  Data.fetch().then(function(data) {
    $scope.Data = data;

    $scope.blueprint = _.filter($scope.Data.blueprints, function(blueprint) {
      return blueprint.slug == $stateParams.blueprintSlug;
    })[0];

    // Visually highlight which building is being viewed
    $('#blueprint-name').text('for '+$scope.blueprint.shortname)
    $('.js-activeBuilding').removeClass('js-activeBuilding')
    $('.building__nav__item').addClass('js-inactiveBuilding')
    $('.building-'+$scope.blueprint.slug).addClass('js-activeBuilding').removeClass('js-inactiveBuilding');
  });
});

app.controller('TipController', function($scope,$state,$stateParams,Data) {
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
