app.controller('AppController', function($scope,Data) {
  Data.fetch().then(function(data) {
    $scope.Data = data;
  });
});

app.controller('BlueprintController', function($scope,$state,$stateParams,$timeout,$interval,Data,Utils) {
  $scope.Utils = Utils;
  $scope.state = $state;

  Data.fetch().then(function(data) {
    $interval(function() {
      console.log($state.params.tipSlug);
    },1000);

    $scope.Data = data;

    $scope.blueprint = _.filter($scope.Data.blueprints, function(blueprint) {
      return blueprint.slug == $stateParams.blueprintSlug;
    })[0];

    // Visually highlight which building is being viewed
    $('#blueprint-name').text('for '+$scope.blueprint.shortname)
    $('.js-activeBuilding').removeClass('js-activeBuilding')
    $('.building__nav__item').addClass('js-inactiveBuilding')
    $('.building-'+$scope.blueprint.slug).addClass('js-activeBuilding').removeClass('js-inactiveBuilding')
    $timeout(function() {
      $('.js-activeBuilding').detach().insertAfter('.building__nav__item:nth-child(2)');
    },350);
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

/*
.js-activeBuilding img {
  height: 100%;
}
.js-inactiveBuilding img {
  height: 50%;
}

CLICK
* ACTIVE.js-remove
* ACTIVE clone() js-placeholder
* 1..n_active addClass('.js-shift-right')

SHIFTED-RIGHT
* .js-remove remove, reattach after :n(2)

* SHIFTED-UP

* remove classes
* remove placeholder


$('.building__nav__item').on('click', function() {
    $('#blueprint-name').text('for '+$scope.blueprint.shortname)
    $('.building__nav__item')
        .removeClass('js-activeBuilding')
        .addClass('js-inactiveBuilding')
    $(this).addClass('js-activeBuilding').removeClass('js-inactiveBuilding');

    if($(this) != $('.building__nav__item:nth-child(3)')) {
        $(this).addClass('js-buildingDown');
        for(var i = 1; i < $(this).index()); i++) {
            console.log(i);
            $('.building__nav__item:nth-child('+i+')');
                .addClass('js-shiftRight')
        }
        $timeout(function() {
            $('.js-activeBuilding').detach().insertAfter('.building__nav__item:nth-child(2)');
        }, 500);
    }

    // add identifying classes

    $('.js-activeBuilding').removeClass('js-activeBuilding')
    $('.building__nav__item').addClass('js-inactiveBuilding')
    $('.building-'+$scope.blueprint.slug).addClass('js-activeBuilding').removeClass('js-inactiveBuilding')
    $timeout(function() {
      $('.js-activeBuilding').detach().insertAfter('.building__nav__item:nth-child(2)');
    },350);
});
*/
