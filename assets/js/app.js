var app = angular.module('app', ['ui.router','ngAnimate'])

.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'public/views/index.html'
    })
    .state('blueprint', {
      url: '/:blueprintSlug',
      controller: 'BlueprintController',
      views: {
        '@': {
          templateUrl: 'public/views/blueprint.html',
          controller: 'BlueprintController',
        }
      }
    })
    .state('blueprint.tip', {
      url: '/:tipSlug',
      controller: 'TipController',
      views: {
        'tips': {
          templateUrl: 'public/views/blueprint-tip.html',
          controller: 'TipController'
        }
      }
    })
  $urlRouterProvider.otherwise('/');
})

.run(function($stateProvider,Data) {

})
