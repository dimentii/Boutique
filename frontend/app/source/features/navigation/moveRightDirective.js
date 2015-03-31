'use strict';

angular.module('boutique').directive('ngMoveRight', [function () {
    return {
        restrict: 'A',
        require: '^ngSlide',
        templateUrl: 'html/right.html',
        link: function (scope, element) {
            element.on('click', function () {
                scope.$apply(function (s) {
                    s.swipeLeft();
                });
            });
        }
    }
}]);