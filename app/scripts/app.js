'use strict';
var portfolioApp = angular.module('portfolioApp', [
  'ui.router',
  'ProjectListController',
  'angulartics',
  'angulartics.google.analytics',
  'SmoothScroll',
  'ngAnimate'
  ]);


portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url         : '/home',
            templateUrl : '../views/home2.html',
            controller  : 'ProjectController'
        })

        .state('mcf', {
          url           : '/mcf',
          templateUrl   : '../views/mcf.html',
          controller    : 'ProjectController'
        })
        .state('taylor', {
          url           : '/taylor',
          templateUrl   : '../views/taylor.html',
          controller    : 'ProjectController'
        })
        .state('evoc', {
          url           : '/evoc',
          templateUrl   : '../views/evoc.html',
          controller    : 'ProjectController'
        })
        .state('pe', {
          url           : '/pe',
          templateUrl   : '../views/pe.html',
          controller    : 'ProjectController'
        })
        .state('aib', {
          url           : '/aib',
          templateUrl   : '../views/aib.html',
          controller    : 'ProjectController'
        })

        .state('ftc', {
          url           : '/ftc',
          templateUrl   : '../views/ftc.html'
        })

        .state('nerd', {
          url           : '/nerd',
          templateUrl   : '../views/nerd.html'
        })

        .state('travel', {
          url           : '/travel',
          templateUrl   : '../views/travel.html'
        })

        .state('portfolio', {
          url           : '/portfolio',
          templateUrl   : '../views/portfolio.html'
        })

        .state('bwbs', {
          url           : '/bwbs',
          templateUrl   : '../views/bwbs.html'
        })

        .state('logos', {
          url           : '/logos',
          templateUrl   : '../views/logos.html'
        })

        .state('posters', {
          url           : '/posters',
          templateUrl   : '../views/posters.html'
        })

        .state('card', {
          url           :'/card',
          templateUrl   : '../views/card.html'
        });

});
