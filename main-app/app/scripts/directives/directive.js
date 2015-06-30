(function () {
    'use strict';
    angular.module('Tombola.SnapCardGame.Directives')

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