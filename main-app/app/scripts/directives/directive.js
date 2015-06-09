(function () {
    'use strict';
    angular.module('tombola.snapCardGame')

        .directive('cardSpace', function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="snapCard showImg{{getResultSprite()}}"></div>'

            };
        })

    .directive('cardSpace1', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="snapCard showImg{{getResultSprite1()}}"></div>'

        };
    });

})();