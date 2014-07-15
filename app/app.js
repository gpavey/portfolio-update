

var app = angular.module('portfolioApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize'
    ]);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/app/partials/home.html'
            })

        .when('/portfolio',
            {
                controller: 'portfolioController',
                templateUrl: '/app/partials/portfolio.html'
            })
        //Define a route that has a route parameter in it (:portfolioID)
        .when('/portfolio/:portfolioID',
            {
                controller: 'portfolioController',
                templateUrl: '/app/partials/portfolio.html'
            })

        .when('/about',
            {
                templateUrl: '/app/partials/about.html'
            })

        .when('/contact',
            {
                templateUrl: '/app/partials/contact.html'
            })

        .otherwise({ redirectTo: '/' });
});