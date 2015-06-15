(function () {
    'use strict';
    angular.module('tombola.snapCardGame.gameModel')

        .service('gameModel', function() {


            var deck = [];

            var suits = [1, 2, 3, 4];


            var makeDeck = function () {

                for (var i = 0; i < suits.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        deck[i * 5 + j] = suits[i];
                    }
                }

            };

            makeDeck();

            deck.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });


            this.hand1 = deck.splice(0, 10);

            this.hand2 = deck.splice(0, 10);


        });

})();