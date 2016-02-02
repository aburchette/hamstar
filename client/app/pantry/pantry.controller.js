'use strict';

angular.module('hamstarApp')
  .controller('PantryCtrl', function ($scope, list, $http) {

    $http.get('http://veraxers-dev.elasticbeanstalk.com/vrxr/user/profile1/').
        success(function(data) {
            $scope.expired = data.expire_foods;
            $scope.inv = data.inventory;

            // $.each(expired, function(k,v){
            //     if(v.title == 'Money Saved'){
            //         $scope.items.saved.you = v["Money Saved"];
            //         $scope.items.saved.percentage = v["percentage"];
            //     } else if(v.title == 'Food Used'){
            //         $scope.items.used.you = v["Money Saved"];
            //         $scope.items.used.percentage = v["percentage"];
            //     } else if(v.title == 'Food Donated'){
            //         $scope.items.donated.you = v["Money Saved"];
            //         $scope.items.donated.percentage = v["percentage"];
            //     } else if(v.title == 'Food Recycled'){
            //         $scope.items.recycled.you = v["Money Saved"];
            //         $scope.items.recycled.percentage = v["percentage"];
            //     }
            // });

            // setTimeout(function(){
            // $('[data-percent]').each(function(){
            //     var p = $scope.items[$(this).attr('data-percent')].percentage;
            //     $(this).css('width', ((p / 100) * 306) + 'px');

            // });},0);


        });

  });
