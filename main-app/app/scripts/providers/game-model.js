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


             var hand1 = deck.splice(0, 10);

             var hand2 = deck.splice(0, 10);


            var snapPot = [];

            window.addEventListener('keydown', checkKeyPressed, false);

            function checkKeyPressed(e) {
                if (e.keyCode == '32') {
                    alert('The Spacebar key is pressed.');

                }
            }




        });

})();