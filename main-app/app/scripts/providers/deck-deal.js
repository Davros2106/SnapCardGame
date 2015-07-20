(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('DealService', function () {
            var numberOfHands = 2;
            var ArrayOfHands = [];
            this.dealFunction = function (deck) {
                for (var i = 0; i < numberOfHands; i++) {
                    ArrayOfHands = deck.splice(0, deck.length / numberOfHands);
                    }
                console.log(ArrayOfHands);
            };
        });
})();