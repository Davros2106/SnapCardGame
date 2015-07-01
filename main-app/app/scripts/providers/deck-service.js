(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')

        .service('DeckService', function () {

            var deck = [],
                hand1 = [],
                hand2 = [],
                numberOfHands = 2,

                makeDeck = function () {

                var numberOfSuits = 5,
                    cardsPerSuit = 5;

                for (var i = 0; i < numberOfSuits; i++) {
                    for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = numberOfSuits[i];
                        }
                    }
                },

                shuffle = function () {
                    deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});
                },

                deal = function () {
                    hand1 = deck.splice(0, deck.length / numberOfHands);
                    hand2 = deck.splice(0, deck.length);
                },

                gameDeck = function () {

                makeDeck();
                shuffle();
                deal();

                };

                gameDeck();
        });
})();