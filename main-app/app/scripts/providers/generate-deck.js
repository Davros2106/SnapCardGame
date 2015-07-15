(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .factory('DeckFactory', ['ShuffleService', function (ShuffleService) {
            var DeckGeneration = function () {
                var deck = [];
                this.makeDeck = function () {
                        var cardsPerSuit = 5,
                            numberOfSuits = 4;
                    for (var i = 0; i < numberOfSuits; i++) {
                        for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = i;
                            console.log(deck);
                        }
                    }
                    this.ShuffleService = function () {
                        ShuffleService.shuffle(deck);
                        console.log(deck);
                    };
                };
            };
            return new DeckGeneration();
        }]);
})();