angular.module('tombola.snapCardGame.gameModel',[]);
angular.module('tombola.snapCardGame.directives',[]);
angular.module('tombola.snapCardGame',[
    'tombola.snapCardGame.gameModel',
    'tombola.snapCardGame.directives'
]);

/**
 @module Tombola.Core.<MODULE_NAME>
 @class <ENTITY_NAME>
 */
(function () {
    'use strict';

    // FEED ME CODE....
})();
(function () {
    'use strict';
    angular.module('tombola.snapCardGame.gameModel')

        .service('gameModel', function() {


            var deck = [];

            var suits = [1, 2, 3, 4];


            var makeDeck = function () {

                for (var i = 0; i < suits.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        deck[i * 5 + j] = suits[i];
                    }
                }

            };

            makeDeck();

            console.log(deck);

            deck.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });


            var hand1 = deck.splice(0, 10);

            var hand2 = deck.splice(0, 10);

            console.log(hand1);

            for (var i = 0; i < hand1.length; i++) {
                console.log(hand1[i]);
            }


            this.getResultSprite = function () {

                if (hand1[i] === '1') {
                    return ('1');
                }
                else if(hand1[i] === '2') {
                    return ('2');
                }
                else if (hand1[i] === '3') {
                    return ('3');
                }
                else if (hand1[i] === '4') {
                    return ('4');
                }
                else {
                    return ('5');
                }

            };

            this.getResultSprite1 = function () {

                if (hand2[i] === '1') {
                    return ('1');
                }
                if (hand2[i] === '2') {
                    return ('2');
                }
                if (hand2[i] === '3') {
                    return ('3');
                }
                if (hand2[i] === '4') {
                    return ('4');
                }
                else {
                    return ('5');
                }


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
                template: '<div class="snapCard showImg{{gameModel.getResultSprite()}}"></div>'

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
    angular.module('tombola.snapCardGame')

        .controller('snapCardController',['$scope','gameModel',function ($scope, gameModel){

            $scope.gameModel = gameModel;
        }]);
})();