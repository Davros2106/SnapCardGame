(function () {
    'use strict';
    angular.module('tombola.snapCardGame');


    var deck = [];


    var suits = ['Trebuchet', 'Rare Pepe', 'Neckbeard', 'Shrek'];

    var makeDeck = function() {

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < 5; j++) {
                deck[i*5 + j] = suits[i];
            }
        }

    };

makeDeck();
    deck.sort(function(){
        return (Math.round(Math.random())-0.5);
    });

    var hand1 = deck.splice(0,10);

    var hand2 = deck.splice(0,10);


    for (var i = 0; i < hand1.length; i++) {

        console.log(hand1[i]);

       console.log(hand2[i]);


        if (hand1[i] === hand2[i]) {
            alert('snap');

        }
        else {
            alert('continue');
        }

    }

    console.log(deck);

})();
