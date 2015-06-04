/**
 @module Tombola.Core.<MODULE_NAME>
 @class <ENTITY_NAME>
 */
(function () {
    'use strict';
    angular.module('tombola.squareCardGame')
        .controller('snapCardController', ['$scope', function ($scope){

            $scope.suits= suits;
        }]);
})();