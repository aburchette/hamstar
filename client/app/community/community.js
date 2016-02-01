'use strict';

angular.module('hamstarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('community', {
        url: '/community',
        templateUrl: 'app/community/community.html',
        controller: 'CommunityCtrl'
      });
  });