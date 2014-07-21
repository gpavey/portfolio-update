var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('ProjectListController', function ($scope) {
  $scope.projects = [
    {'name': 'Aviation Island Brewing',
     'url': 'aviation-island.html',
     'img': 'images/aib/logo-600.jpg',
     'category': [
      'Web Design',
      'Branding'
     ],
   },

   {'name': 'Bike Works Beach & Sports',
     'url': 'bwbs.html',
     'img': 'images/bw_logo_600.png',
     'category': [
      'Web Design'
     ],
   },

   {'name': 'For The Cause',
     'url': 'ftc.html',
     'img': 'images/ftc.jpg',
     'category': [
      'Web Design'
     ],
   },

   {'name': 'Various Logos',
     'url': 'logo.html',
     'img': 'images/logos/java_love.jpg',
     'category': [
      'Branding'
     ],
   },

   {'name': 'Posters',
     'url': 'posters.html',
     'img': 'images/windsurfing_thumb.jpg',
     'category': [
      'Branding'
     ],
   },
  ];
});