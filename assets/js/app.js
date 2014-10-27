var app = angular.module('app', ['ui.router']);

/* AngularJS calling order
1. app.config()
2. app.run()
3. directive's compile functions (if they are found in the dom)
4. app.controller()
5. directive's link functions (again if found)
*/

app.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    // .state('intro', {
    //   url: '/',
    //   templateUrl: 'public/views/intro.html'
    // })
    .state('index', {
      url: '/',
      templateUrl: 'public/views/index.html'
    })
    .state('blueprint', {
      url: '/blueprint',
      templateUrl: 'public/views/blueprint.html'
    })
    .state('blueprint.office', {
      url: '/office',
      templateUrl: 'public/views/blueprint-office.html'
    })
    .state('blueprint.retail', {
      url: '/retail',
      templateUrl: 'public/views/blueprint-retail.html'
    })
    .state('blueprint.pub', {
      url: '/pub',
      templateUrl: 'public/views/blueprint-pub.html'
    })
    .state('blueprint.clinic', {
      url: '/clinic',
      templateUrl: 'public/views/blueprint-clinic.html'
    })
    .state('blueprint.hairdresser', {
      url: '/hairdresser',
      templateUrl: 'public/views/blueprint-hairdresser.html'
    })

  $urlRouterProvider.otherwise('/');
})

app.run(function () {
  // $state.transitionTo('intro');
})
