'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/activity',
        templateUrl: 'app/activity/activity.html',
        controller: 'ActivityCtrl'
      });
  });