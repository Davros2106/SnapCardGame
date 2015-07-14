(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('ShuffleAndDeal', function () {
            var numberOfHands = 2,
                hand1 = [],
                hand2 = [];
            this.shuffle = function (deck) {
                var j, k, i = deck.length;
                while (--i) {
                    j = Math.floor(Math.random() * i);
                    k = deck[i];
                    deck[i] = deck[j];
                    deck[j] = k;
                }
                return deck;
            };
            this.deal = function (deck) {
                hand1 = deck.splice(0, deck.length / numberOfHands);
                hand2 = deck.splice(0, deck.length);
            };
        });
})();