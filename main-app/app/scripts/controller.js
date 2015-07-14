(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController',
        ['$scope', 'GenerateDeck', function ($scope, GenerateDeck) {
            $scope.GenerateDeck = GenerateDeck;
            $scope.newGame = function () {
                GenerateDeck.makeDeck();
                GenerateDeck.shuffleAndDeal();
            };
        }]);
})();