var portfolioApp = angular.module('portfolioApp', [
  'ui.router',
  'ProjectListController',
  'SmoothScroll',
  'angular-google-analytics'
  ]);


portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url         : '/home',
            templateUrl : '../partials/home.html',
            controller  : 'ProjectController'
        })

        .state('aib', {
          url           : '/aib',
          templateUrl   : '../partials/aib.html',
          controller    : 'ProjectController'
        })

        .state('ftc', {
          url           : '/ftc',
          templateUrl   : '../partials/ftc.html'
        })

        .state('bwbs', {
          url           : '/bwbs',
          templateUrl   : '../partials/bwbs.html'
        })

        .state('logos', {
          url           : '/logos',
          templateUrl   : '../partials/logos.html'
        })

        .state('posters', {
          url           : '/posters',
          templateUrl   : '../partials/posters.html'
        })

        .state('card', {
          url           :'/card',
          templateUrl   : '../partials/card.html'
        })

})