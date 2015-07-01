angular.module('Tombola.SnapCardGame.Game', []);
angular.module('Tombola.SnapCardGame.Deck', []);

angular.module('Tombola.SnapCardGame', [
    'Tombola.SnapCardGame.Game',
    'Tombola.SnapCardGame.Deck'
]);

(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Deck')
        .service('DeckService', function () {
            var deck = [],
                hand1 = [],
                hand2 = [],
                numberOfHands = 2,
                makeDeck = function () {
                    var numberOfSuits = 5,
                        cardsPerSuit = 5;

                    for (var i = 0; i < numberOfSuits; i++) {
                        for (var j = 0; j < cardsPerSuit; j++) {
                                deck[i * cardsPerSuit + j] = numberOfSuits[i];
                            }
                        }
                },
                shuffle = function () {
                    deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});
                },
                deal = function () {
                    hand1 = deck.splice(0, deck.length / numberOfHands);
                    hand2 = deck.splice(0, deck.length);
                },
                gameDeck = function () {
                    makeDeck();
                    shuffle();
                    deal();
                };

                gameDeck();
        });
})();
(function () {
    angular.module('Tombola.SnapCardGame.Game')
        .service('GameModel', function () {
        });
    })();
(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame')
        .controller('SnapCardController', ['$scope', 'GameModel', 'DeckService', function ($scope, gameModel, deckService){
            $scope.GameModel = gameModel;
            $scope.DeckService = deckService;
        }]);
})();