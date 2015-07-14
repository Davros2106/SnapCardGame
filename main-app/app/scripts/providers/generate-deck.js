(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .factory('GenerateDeck', ['ShuffleAndDeal',function (ShuffleAndDeal) {
            var DeckGeneration = function () {
                var deck = [];
                this.makeDeck = function () {
                    var suits = [1, 2, 3, 4],
                        cardsPerSuit = 5,
                        numberOfSuits = 4;
                    for (var i = 0; i < numberOfSuits; i++) {
                        for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = suits[i];
                        }
                    }
                    ShuffleAndDeal.shuffle(deck);
                    ShuffleAndDeal.deal(deck);
                };
            };
            return new DeckGeneration();
        }]);
})();