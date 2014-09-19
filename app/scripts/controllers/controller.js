'use strict';
var ProjectListController = angular.module('ProjectListController', []);

ProjectListController.controller('ProjectController', function ($scope) {
  $scope.message = 'This is Add new order screen';
  $scope.projects = [
    {'name'     : 'Aviation Island Brewing',
     'url'      : 'aib',
     'img'      : 'images/aib.jpg',
     'category' : [
      'Web Development',
      'Branding'
     ],
   },

   {'name'      : 'Bike Works Beach & Sports',
     'url'      : 'bwbs',
     'img'      : 'images/bwbs.jpg',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'Travel Mockup',
     'url'      : 'travel',
     'img'      : 'images/travel.jpg',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'SF Film Nerd',
     'url'      : 'nerd',
     'img'      : 'images/film.jpg',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'Portfolio',
     'url'      : 'portfolio',
     'img'      : 'images/portfolio.jpg',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'For The Cause',
     'url'      : 'ftc',
     'img'      : 'images/cause.jpg',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'Business Card',
     'url'      : 'card',
     'img'      : 'images/gp_white.png',
     'category': [
      'Branding'
     ],
   },

   {'name'      : 'Various Logos',
     'url'      : 'logos',
     'img'      : 'images/jl.png',
     'category': [
      'Branding'
     ],
   },

   {'name'      : 'Posters',
     'url'      : 'posters',
     'img'      : 'images/windsurfing_thumb.jpg',
     'category' : [
      'Branding',
      'Print'
     ],
   },
  ];
});


