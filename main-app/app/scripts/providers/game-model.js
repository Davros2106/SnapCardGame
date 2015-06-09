(function () {
    'use strict';
    angular.module('tombola.snapCardGame');

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


            for (var i = 0; i < hand1.length; i++) {

                console.log(hand1[i]);

                console.log(hand2[i]);


                if (hand1[i] === hand2[i]) {
                    console.log('snap');

                }
                else {
                    console.log('continue');
                }

            }

            console.log(deck);


           this.getResultSprite = function () {

               if (hand1[i] === '1') {
                   return ('1');
               }
               if (hand1[i] === '2') {
                   return ('2');
               }
               if (hand1[i] === '3') {
                   return ('3');
               }
               if (hand1[i] === '4') {
                   return ('4');
               }
               else {
                   return ('5');
               }

           };

           this.getResultSprite1 = function () {

           if (hand2[i] === '1') {
               return ('1');
           }
           if (hand2[i] === '2') {
               return ('2');
           }
           if (hand2[i] === '3') {
               return ('3');
           }
           if (hand2[i] === '4') {
               return ('4');
           }
           else {
               return ('5');
           }

    };


})();