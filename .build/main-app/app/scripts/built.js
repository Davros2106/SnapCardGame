angular.module('tombola.snapCardGame',[]);

/**
 @module Tombola.Core.<MODULE_NAME>
 @class <ENTITY_NAME>
 */
(function () {
    'use strict';

    // FEED ME CODE....
})();
(function () {
    'use strict';
    angular.module('tombola.snapCardGame');

    var deck = [];

    var suits = ['Trebuchet', 'Rare Pepe', 'Neckbeard', 'Shrek'];

    var Card = function (number, suit) {

        this.suit = suit;

    };


    var makeDeck = function() {

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < 5; j++) {
                deck[i*5+ j] = new Card(j, suits[i]);
            }
        }

    };

makeDeck();

console.log(deck);



})();

//    var hand1 = [1,2,3,4,5];
//
//    var hand2 = [1,2,3,4,5];
//
//    var deck = [hand1,hand2];
//
//    hand1.sort(function(){
//        return (Math.round(Math.random())-0.5);
//    });
//
//    hand2.sort(function(){
//        return (Math.round(Math.random())-0.5);
//    });
//
//    for (var i = 0; i < hand1.length; i++) {
//        console.log(hand1[i]);
//
//       console.log(hand2[i]);
//
//
//        if (hand1[i] == hand2[i]) {
//            console.log('snap');
//        }
//    }
//
//    console.log(deck);
//
//})();
/**
 @module Tombola.Core.<MODULE_NAME>
 @class <ENTITY_NAME>
 */
(function () {
    'use strict';

    // FEED ME CODE....
})();