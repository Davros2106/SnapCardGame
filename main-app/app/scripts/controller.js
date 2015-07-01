(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController', ['$scope', 'GameModel', 'DeckService', function ($scope, gameModel, deckService){
            $scope.GameModel = gameModel;
            $scope.DeckService = deckService;
        }]);
})();