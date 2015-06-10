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