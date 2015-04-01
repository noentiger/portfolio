	/*global app */
	/*jshint unused: false */

      app.config(['$routeProvider', function($routeProvider) {
        'use strict';
        $routeProvider
          .when('/', {
            templateUrl: 'templates/portfolio-grid.html',
            controller: 'PortfolioController'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]);

      app.controller('MobileGridController', ['$scope', function($scope) {
        'use strict';

      }]);

      app.controller('BragController', ['$scope','$http', function($scope, $http) {
        'use strict';

        $scope.portfolioTitle = 'work';

        $http.get('data/brag.json').
          success(function(data, status, headers, config) {
            $scope.brag = data;
          }).
          error(function(data, status, headers, config) {
            // log error
          });

      }]);

      app.controller('PortfolioController', ['$scope','$http','ngDialog', function($scope, $http, ngDialog) {
        'use strict';

        $scope.portfolioTitle = 'work';
        $scope.selected = {value: 0};

        $http.get('data/portfolio.json').
          success(function(data, status, headers, config) {
            $scope.items = data;
          }).
          error(function(data, status, headers, config) {
            // log error
          });

          $scope.viewPortfolioItem = function(item)
          {
            $scope.item = $scope.items[item];

            ngDialog.open({ 
              template: 'modal.html',
              className: 'ngdialog-theme-default portfolio-item',
              scope: $scope
            });
          };
      }]);

      app.controller('ClientController', ['$scope','$http', function($scope, $http) {
        'use strict';

        $scope.clientsTitle = 'clients';

        $http.get('data/clients.json').
          success(function(data, status, headers, config) {
            $scope.clients = data;
          }).
          error(function(data, status, headers, config) {
            // log error
          });        

      }]);

      app.controller('MainCtrl', ['$scope','ngDialog', function($scope, ngDialog) {
        'use strict';

        $scope.clickToOpen = function () {
          ngDialog.open({ 
            template: '<p>eaudafd</p>',
            plain: true 
          });
        };

      }]);

      app.controller('PostController', ['$scope', function($scope) {
      }]);