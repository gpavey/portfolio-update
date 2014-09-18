'use strict';
var ProjectListController = angular.module('ProjectListController', []);

ProjectListController.controller('ProjectController', function ($scope) {
  $scope.message = 'This is Add new order screen';
  $scope.projects = [
    {'name'     : 'Aviation Island Brewing',
     'url'      : 'aib',
     'img'      : 'images/aib/logo-600.jpg',
     'category' : [
      'Web Development',
      'Branding'
     ],
   },

   {'name'      : 'For The Cause',
     'url'      : 'ftc',
     'img'      : 'images/cause.png',
     'category' : [
      'Web Development'
     ],
   },

   {'name'      : 'Bike Works Beach & Sports',
     'url'      : 'bwbs',
     'img'      : 'images/logos/bw_logo_600.png',
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

   {'name'      : 'Posters',
     'url'      : 'posters',
     'img'      : 'images/windsurfing_thumb.jpg',
     'category' : [
      'Branding',
      'Print'
     ],
   },

   {'name'      : 'Various Logos',
     'url'      : 'logos',
     'img'      : 'images/jl.png',
     'category': [
      'Branding'
     ],
   }
  ];
});


