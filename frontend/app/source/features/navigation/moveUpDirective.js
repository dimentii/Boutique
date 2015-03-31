'use strict';

angular.module('boutique').directive('ngMoveUp', [function () {
    return {
        restrict: 'A',
        require: '^ngSection',
        templateUrl: 'html/up.html',
        link: function (scope, element) {
            element.on('click', function () {
                scope.$apply(function (s) {
                    s.swipeDown();
                });
            });
        }
    }
}]);