'use strict';

angular.module('hamstarApp')
  .controller('PantryCtrl', function ($scope, list) {
    $scope.items = list;
  });
