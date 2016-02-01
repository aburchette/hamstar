'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cook', {
        url: '/cook',
        templateUrl: 'app/cook/cook.html',
        controller: 'CookCtrl'
      });
  });