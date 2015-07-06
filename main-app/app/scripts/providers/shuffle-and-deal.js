(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('ShuffleAndDeal', ['GenerateDeck', function (generateDeck) {
            var numberOfHands = 2,
                hand1 = [],
                hand2 = [];
                this.shuffle = function () {
                    generateDeck.deck.sort(function () {
                        return (Math.round(Math.random()) - 0.5);});
                 };
                this.deal = function () {
                    hand1 = generateDeck.deck.splice(0, deck.length / numberOfHands);
                    hand2 = generateDeck.deck.splice(0, deck.length);
                    console.log(deal);
                };
        }]);
})();