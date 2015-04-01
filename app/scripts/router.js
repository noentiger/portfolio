	/*global app */
	/*jshint unused: false */

      app.config(['$routeProvider', function($routeProvider) {
        'use strict';
        $routeProvider
          .when('/hej', {
            templateUrl: 'templates/portfolio-grid.html',
            controller: 'PortfolioController'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]);