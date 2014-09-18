'use strict';
var portfolioApp = angular.module('portfolioApp', [
  'ui.router',
  'ProjectListController',
  'angulartics',
  'angulartics.google.analytics',
  'SmoothScroll'
  ]);


portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url         : '/home',
            templateUrl : '../views/home.html',
            controller  : 'ProjectController'
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
