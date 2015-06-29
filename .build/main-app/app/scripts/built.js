angular.module('tombola.snapCardGame.GameModel',[]);
angular.module('tombola.snapCardGame.DeckService',[]);
angular.module('tombola.snapCardGame.controller',[]);
angular.module('tombola.snapCardGame.directives',[]);
angular.module('tombola.snapCardGame',[
    'tombola.snapCardGame.GameModel',
    'tombola.snapCardGame.DeckService',
    'tombola.snapCardGame.controller',
    'tombola.snapCardGame.directives'
]);

(function () {
    'use strict';
    angular.module('tombola.snapCardGame.DeckService')

        .service('DeckService', function() {

            var deck = [],
                hand1 = [],
                hand2 = [],
                numberOfHands = 2;


            var makeDeck = function () {

                var suits = ['Shrek','Trebuchet','neckbeard','pepe'],
                    cardsPerSuit = 5;

                for (var i = 0; i < suits.length; i++) {
                    for (var j = 0; j < cardsPerSuit; j++) {
                            deck[i * cardsPerSuit + j] = suits[i];

                        }
                    }
            };

            var shuffle = function(){

                deck.sort(function () {
                    return (Math.round(Math.random()) - 0.5);});

            };

            var deal = function(){


                    hand1 = deck.splice(0, deck.length / numberOfHands);
                    hand2 = deck.splice(0, deck.length);

            };

            var gameDeck = function() {

                makeDeck();
                shuffle();
                deal();

            };


            gameDeck();
            console.log(hand2);
            console.log(hand1);

        });

})();

(function () {
    angular.module('tombola.snapCardGame.GameModel')

        .service('GameModel', function() {

            this.playerTurn = function () {


            };

        });



        })();
(function () {
    'use strict';
    angular.module('tombola.snapCardGame.directives')

        .directive('cardSpace', function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="snapCard showImg{{gameModel.getResultSprite}}" ng-click="makeMove"></div>'

            };
        })

    .directive('cardSpace1', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="snapCard showImg{{gameModel.getResultSprite1()}}"></div>'

        };
    });

})();

(function () {
    'use strict';
    angular.module('tombola.snapCardGame.controller')

        .controller('SnapCardController',['$scope','GameModel','DeckService',function ($scope, GameModel, DeckService){

            $scope.GameModel = GameModel;

            $scope.DeckService = DeckService;


            $scope.playerTurn = function () {

            };


        }]);
})();