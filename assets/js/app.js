var app = angular.module('app', ['ui.router','ngAnimate'])

.config(function($stateProvider,$urlRouterProvider) {

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

.run(function($stateProvider,Data) {

})
