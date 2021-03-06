'use strict';

angular.module('hamstarApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Pantry',
      'link': '/pantry'
    },{
      'title': 'Cook',
      'link': '/cook'
    },{
      'title': 'Community',
      'link': '/community'
    },{
      'title': 'Shopping List',
      'link': '/shopping-list'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });