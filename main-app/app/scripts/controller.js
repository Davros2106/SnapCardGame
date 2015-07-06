(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController', ['$scope', 'GenerateDeck', 'ShuffleAndDeal', function ($scope, generateDeck, shuffleAndDeal){
                $scope.newGame = function () {
                    generateDeck.makeDeck();
                    shuffleAndDeal.shuffle();
                    shuffleAndDeal.deal();
                };
        }]);
})();