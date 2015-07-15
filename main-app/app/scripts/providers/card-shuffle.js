(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('ShuffleService', function () {
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
        });
})();