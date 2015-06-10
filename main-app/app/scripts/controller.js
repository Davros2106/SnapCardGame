
(function () {
    'use strict';
    angular.module('tombola.snapCardGame')

        .controller('snapCardController',['$scope','gameModel',function ($scope, gameModel){

            $scope.gameModel = gameModel;
        }]);
})();