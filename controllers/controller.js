var ProjectListController = angular.module('ProjectListController', []);

ProjectListController.controller('ProjectController', function ($scope) {
  $scope.message = 'This is Add new order screen';
  $scope.projects = [
    {'name': 'Aviation Island Brewing',
     'url': 'partials/aviation-island.html',
     'img': 'images/aib/logo-600.jpg',
     'category': [
      'Web Development',
      'Branding'
     ],
   },

   {'name': 'Bike Works Beach & Sports',
     'url': 'bwbs.html',
     'img': 'images/bw_logo_600.png',
     'category': [
      'Web Development'
     ],
   },

   {'name': 'For The Cause',
     'url': 'ftc.html',
     'img': 'images/ftc.jpg',
     'category': [
      'Web Development'
     ],
   },

   {'name': 'Various Logos',
     'url': 'logos.html',
     'img': 'images/logos/java_love.jpg',
     'category': [
      'Branding'
     ],
   },

   {'name': 'Posters',
     'url': 'posters.html',
     'img': 'images/windsurfing_thumb.jpg',
     'category': [
      'Branding',
      'Print'
     ],
   },
  ]
})

