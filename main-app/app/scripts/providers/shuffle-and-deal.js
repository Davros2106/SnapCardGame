(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('ShuffleAndDeal', function () {

            var numberOfHands = 2,
                hand1 = [],
                hand2 = [],
            shuffle = function () {
                deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});
            },

            deal = function () {
                hand1 = deck.splice(0, deck.length / numberOfHands);
                hand2 = deck.splice(0, deck.length);
            };
        });
})();