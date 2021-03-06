'use strict';

angular.module('boutique').directive('ngMoveDown', [function () {
    return {
        restrict: 'A',
        templateUrl: 'html/down.html',
        link: function (scope, element) {
            element.on('click', function () {
                scope.$apply(function (s) {
                    s.swipeUp();
                });
            });
        }
    }
}]);