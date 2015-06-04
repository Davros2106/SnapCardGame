(function () {
    'use strict';
    angular.module('tombola.snapCardGame')

        .directive('cardSpace', function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="snapCard showImg5"></div>'

            };
        });
})();