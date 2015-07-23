(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .factory('DeckFactory', ['ShuffleService','DealService', function (ShuffleService, DealService) {
            var Deck = function () {
                var deck = [];
                this.create = function () {
                        var cardsPerSuit = 5,
                            numberOfSuits = 4;
                    for (var i = 0; i < numberOfSuits; i++) {
                        for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = i;
                            console.log(deck);
                        }
                    }
                };
                this.shuffle = function () {
                    ShuffleService.shuffleFunction(deck);
                    console.log(deck);
                };
                this.deal = function() {
                    DealService.dealFunction(deck);
                };
            };
            return new Deck();
        }]);
})();