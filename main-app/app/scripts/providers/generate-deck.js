(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .factory('GenerateDeck', function () {
            var deck = [],
                makeDeck = function () {
                    var numberOfSuits = 5,
                        cardsPerSuit = 5;

                    for (var i = 0; i < numberOfSuits; i++) {
                        for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = numberOfSuits[i];
                        }
                    }
                };
        });
})();