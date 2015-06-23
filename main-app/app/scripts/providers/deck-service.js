(function () {
    'use strict';
    angular.module('tombola.snapCardGame.DeckService')

        .service('DeckService', function() {

            var deck = [],
                numberOfHands = 2,
                cardsPerSuit = 5;

            var makeDeck = function () {

                var suits = [1,2,3,4];

                for (var i = 0; i < suits.length; i++) {
                    for (var j = 0; j < cardsPerSuit; j++) {
                        deck[i * cardsPerSuit + j] = suits[i];
                    }
                }

            };


            var shuffle = function(){

                deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});

            };


            var deal = function() {

                for (var i = 0; i < numberOfHands; i++) {

                    deck.splice(deck.length / numberOfHands);

                    }

            };


            var gameDeck = function() {

                makeDeck();
                shuffle();
                deal();

            };


            gameDeck();
            console.log(deck);

        });

})();