'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('alerts', {
        url: '/alerts',
        templateUrl: 'app/alerts/alerts.html',
        controller: 'AlertsCtrl'
      });
  });