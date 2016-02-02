'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'app/items/items.html',
        controller: 'ItemsCtrl'
      });
  });