angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('aCUPUNCTURE', {
    url: '/page1',
    templateUrl: 'templates/aCUPUNCTURE.html',
    controller: 'aCUPUNCTURECtrl'
  })

  .state('slideMe', {
    url: '/page6',
    templateUrl: 'templates/slideMe.html',
    controller: 'slideMeCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('neugenLife', {
    url: '/page2',
    templateUrl: 'templates/neugenLife.html',
    controller: 'neugenLifeCtrl'
  })

  .state('mindmeditate', {
    url: '/page3',
    templateUrl: 'templates/mindmeditate.html',
    controller: 'mindmeditateCtrl'
  })

  .state('videoContent', {
    url: '/page4',
    templateUrl: 'templates/videoContent.html',
    controller: 'videoContentCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});