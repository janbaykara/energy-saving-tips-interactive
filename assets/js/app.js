angular.module('ngError', ['ng']).directive('ngError', ['$parse', function($parse){
    return {
        restrict: 'A',
        compile: function($element, attr) {
            var fn = $parse(attr['ngError']);

            return function(scope, element, attr) {
                element.on('error', function(event) {
                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            };
        }
    };
}]);

angular.module('app', ['ui.router','ngAnimate','ngError','ngRetina'])

.config(function($stateProvider,$urlRouterProvider,ngRetinaProvider) {
    ngRetinaProvider.setInfix('_2x');

  $stateProvider
    .state('main', {
      url: '/',
      views: {
        'app': {
          templateUrl: 'public/views/main.html'
        }
      }
    })
    .state('main.blueprint', {
      url: ':blueprintSlug',
      controller: 'BlueprintController',
      views: {
        'content': {
          templateUrl: 'public/views/main.blueprint.html',
          controller: 'BlueprintController',
        }
      }
    })
    .state('main.blueprint.tip', {
      url: '/:tipSlug',
      controller: 'TipController',
      views: {
        'tips': {
          templateUrl: 'public/views/main.blueprint.tip.html',
          controller: 'TipController'
        }
      }
    })
  $urlRouterProvider.otherwise('/');
})
