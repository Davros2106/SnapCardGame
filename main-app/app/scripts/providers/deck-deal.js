(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('DealService', function () {
            var numberOfHands = 2,
                ArrayOfHands = [];
            this.dealFunction = function (deck) {
                var size = deck.length / numberOfHands;
                for (var i = 0; i < deck.length; i += size) {
                    ArrayOfHands[i] = deck.slice(i, i + size);
                }
            };
        });
})();