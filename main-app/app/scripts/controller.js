
(function () {
    'use strict';
    angular.module('tombola.snapCardGame.controller')

        .controller('SnapCardController',['$scope','GameModel','DeckService',function ($scope, GameModel, DeckService){

            $scope.GameModel = GameModel;

            $scope.DeckService = DeckService;


            $scope.playerTurn = function () {

            };


        }]);
})();