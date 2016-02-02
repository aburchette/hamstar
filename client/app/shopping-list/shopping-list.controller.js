'use strict';

angular.module('hamstarApp')
  .controller('ShoppingListCtrl', function ($scope, list, socket) {
    $scope.items = list;
    $scope.tobuy = [];
    $scope.add = function(item){
    	$scope.tobuy.push(item);
    };



    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    $scope.addThing = function() {
      if($scope.search === '') {
        return;
      }
      $scope.tobuy.push($scope.search);
      $scope.search = '';

      // $http.post('/api/things', { name: $scope.newThing });
      // $scope.newThing = '';
    };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
