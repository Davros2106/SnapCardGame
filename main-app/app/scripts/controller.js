(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController',
        ['$scope', 'DeckFactory', function ($scope, DeckFactory) {
            $scope.DeckFactory = DeckFactory;
            $scope.newGame = function () {
                DeckFactory.create();
                DeckFactory.shuffle();
                DeckFactory.deal();
            };
        }]);
})();