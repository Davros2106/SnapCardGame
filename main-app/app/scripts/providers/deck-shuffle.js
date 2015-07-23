(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('ShuffleService', function () {
            this.shuffleFunction = function (deck) {
                deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);
                });
            };
        });
})();