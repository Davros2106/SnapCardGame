(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController',
        ['$scope', 'GenerateDeck', 'ShuffleAndDeal', function ($scope, GenerateDeck) {
            $scope.GenerateDeck = GenerateDeck;
            $scope.newGame = function () {
                GenerateDeck.makeDeck();
            };
        }]);
})();