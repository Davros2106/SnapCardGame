(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')

        .service('DeckService', function () {

            var deck = [],
                hand1 = [],
                hand2 = [],
                numberOfHands = 2;

            var makeDeck = function () {

                var suits = ['Shrek', 'Trebuchet', 'neckbeard', 'pepe'],
                    cardsPerSuit = 5;

                for (var i = 0; i < suits.length; i++) {
                    for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = suits[i];

                        }
                    }
            };

            var shuffle = function () {

                deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});

            };

            var deal = function () {

                    hand1 = deck.splice(0, deck.length / numberOfHands);
                    hand2 = deck.splice(0, deck.length);

            };

            var gameDeck = function () {

                makeDeck();
                shuffle();
                deal();

            };

            gameDeck();
            console.log(hand2);
            console.log(hand1);
        });

})();