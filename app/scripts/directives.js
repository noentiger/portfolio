	/*global app, $templateCache, scrollReveal */
	/*jshint unused: false */

      app.directive('withLove', function(){
        'use strict';
       return {
         restrict: 'EA',
         replace: true,
         scope: {
           title: '@'
         },
         templateUrl: 'with-love.html'
       };
      });

      app.directive('portfolio', function() {
        'use strict';
        return {
          restrict: 'CEA',
          controller: 'PortfolioController',
          templateUrl: 'portfolio-grid.html',
          link: function(scope, element, attrs) {

          }
        };
      });

      app.directive('mobileGrid', function() {
        'use strict';
        return {
          restrict: 'CEA',
          controller: 'MobileGridController',
          templateUrl: 'mobile-grid.html'
        };
      });

      app.directive('clients', function() {
        'use strict';
        return {
          restrict: 'CEA',
          controller: 'ClientController',
          templateUrl: 'client-grid.html'
        };
      });

      app.directive('logo', function() {
        'use strict';
        return {
          restrict: 'EA',
          templateUrl: 'logo.html'
        };
      });

      app.directive('brag', function() {
        'use strict';
        return {
          restrict: 'EA',
          controller: 'BragController',
          templateUrl: 'brag.html'
        };
      });

      app.directive('onLastRepeat', function() {
        'use strict';
        return function(scope, element, attrs) {
            if (scope.$last) {
              window.onload = function(){
                // Last item is loaded
                window.sr = new scrollReveal();
              };
            }
        };
      });