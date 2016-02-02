'use strict';

angular.module('hamstarApp')
  .controller('ActivityCtrl', function ($scope, $http) {
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
  });
