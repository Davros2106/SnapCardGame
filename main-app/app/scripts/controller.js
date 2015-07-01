(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController', ['$scope', 'GameModel', 'GenerateDeck', 'ShuffleAndDeal', function ($scope, generateDeck, shuffleAndDeal){
            $scope.GenrateDeck = generateDeck;
            $scope.ShuffleAndDeal = shuffleAndDeal;
        }]);
})();