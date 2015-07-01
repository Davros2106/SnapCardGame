
(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')

        .controller('SnapCardController', ['$scope', 'GameModel', 'DeckService', function ($scope, GameModel, DeckService){
            $scope.GameModel = GameModel;
            $scope.DeckService = DeckService;
        }]);
})();