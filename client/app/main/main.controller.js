'use strict';

angular.module('hamstarApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

    $scope.items = {
        saved: {},
        used: {},
        donated: {},
        recycled: {}
    };
    $scope.message = 'Hello';
    $('[data-percent]').css('width','0');

    $http.get('http://veraxers-dev.elasticbeanstalk.com/vrxr/user/profile1/').
        success(function(data) {
            var items = data.activity;
            $.each(items, function(k,v){
                if(v.title == 'Money Saved'){
                    $scope.items.saved.you = v["Money Saved"];
                    $scope.items.saved.percentage = v["percentage"];
                } else if(v.title == 'Food Used'){
                    $scope.items.used.you = v["Money Saved"];
                    $scope.items.used.percentage = v["percentage"];
                } else if(v.title == 'Food Donated'){
                    $scope.items.donated.you = v["Money Saved"];
                    $scope.items.donated.percentage = v["percentage"];
                } else if(v.title == 'Food Recycled'){
                    $scope.items.recycled.you = v["Money Saved"];
                    $scope.items.recycled.percentage = v["percentage"];
                }
            });

            setTimeout(function(){
            $('[data-percent]').each(function(){
                var p = $scope.items[$(this).attr('data-percent')].percentage;
                $(this).css('width', ((p / 100) * 306) + 'px');

            });},0);


        });
    //$('[data-toggle="tooltip"]').tooltip();

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
