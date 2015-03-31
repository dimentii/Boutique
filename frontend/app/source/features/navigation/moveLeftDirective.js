'use strict';

angular.module('boutique').directive('ngMoveLeft', [function () {
    return {
        restrict: 'A',
        require: '^ngSlide',
        templateUrl: 'html/left.html',
        link: function (scope, element) {
            element.on('click', function () {
                scope.$apply(function (s) {
                    s.swipeRight();
                });
            });
        }
    }
}]);