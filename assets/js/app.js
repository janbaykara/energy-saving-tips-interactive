var app = angular.module('app', ['ui.router'])

/* AngularJS calling order
1. app.config()
2. app.run()
3. directive's compile functions (if they are found in the dom)
4. app.controller()
5. directive's link functions (again if found)
*/

.config(function($stateProvider,$urlRouterProvider) {

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
      url: '/blueprint/:blueprintSlug',
      templateUrl: 'public/views/blueprint.html',
      controller: 'BlueprintController'
    })
    .state('blueprint.tip', {
      url: '/tip/:tipSlug',
      templateUrl: 'public/views/blueprint-tip.html',
      controller: 'TipController'
    })
    // .state('blueprint.office', {
    //   url: '/office',
    //   templateUrl: 'public/views/blueprint-office.html'
    // })
    // .state('blueprint.retail', {
    //   url: '/retail',
    //   templateUrl: 'public/views/blueprint-retail.html'
    // })
    // .state('blueprint.pub', {
    //   url: '/pub',
    //   templateUrl: 'public/views/blueprint-pub.html'
    // })
    // .state('blueprint.clinic', {
    //   url: '/clinic',
    //   templateUrl: 'public/views/blueprint-clinic.html'
    // })
    // .state('blueprint.hairdresser', {
    //   url: '/hairdresser',
    //   templateUrl: 'public/views/blueprint-hairdresser.html'
    // })

  $urlRouterProvider.otherwise('/');
})

// .run(function($stateProvider,Data) {
//   // $state.transitionTo('intro');
//   Data.fetch().then(function(data) {
//     _(data.blueprints).forEach(function(blueprint) {
//   //     // _(blueprint.tips).forEach(function(tip) {
//   //     //   tip.id = toSlug(tip.title);
//   //     //   $stateProvider.state(blueprint.id+'.'tip.id, {
//   //     //     url: '/'+tip.id,
//   //     //     templateUrl: 'public/views/index.html'
//   //     //   })
//   //     // })
//       blueprint.slug = blueprint.id.split('.')[1];
//       $stateProvider.state(blueprint.id, {
//         url: '/'+blueprint.slug,
//         templateUrl: 'public/views/blueprint-'+blueprint.slug+'.html'
//       })
//   //     .state('report.detail', {
//   //       url: '/report/{name}?region&time',
//   //       templateUrl: 'report.html',
//   //       controller: 'ReportController'
//   //     })
//       $stateProvider.state(blueprint.id+".tip", {
//         url: '/:tipSlug',
//         templateUrl: 'public/views/blueprint-tip.html'
//       })
//     });
//   });
// })
