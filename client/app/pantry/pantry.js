'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pantry', {
        url: '/pantry',
        templateUrl: 'app/pantry/pantry.html',
        controller: 'PantryCtrl'
      });
  });