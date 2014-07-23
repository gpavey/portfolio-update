var portfolioApp = angular.module('portfolioApp', ['ui.router', 'ProjectListController']);


portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'ProjectController'
        })

        .state('aib', {
          url: '/aib',
          templateUrl: '../partials/aviation-island.html',
          controller: 'ProjectController'
        })

        .state('ftc', {
          url: '/ftc',
          templateUrl: '/partials/ftc.html'
        })

        .state(' bwbs', {
          url: '/bwbs',
          templateUrl: 'bwbs.html'
        })

        .state('logos', {
          url: '/logos',
          templateUrl: 'logos.html'
        })

        .state('posters', {
          url: '/posters',
          templateUrl: 'posters.html'
        })

})