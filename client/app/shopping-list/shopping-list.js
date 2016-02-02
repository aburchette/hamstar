'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shopping-list', {
        url: '/shopping-list',
        templateUrl: 'app/shopping-list/shopping-list.html',
        controller: 'ShoppingListCtrl'
      });
  });