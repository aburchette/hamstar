'use strict';

angular.module('hamstarApp')
  .controller('ShoppingListCtrl', function ($scope, list) {
    $scope.items = list;
    $scope.tobuy = [];
    $scope.add = function(item){
    	$scope.tobuy.push(item);
    }
  });
