'use strict';

angular.module('boutique').directive('ngSlide', ['navigation', '$compile', function (navigation, $compile) {
    return {
        restrict: 'A',
        terminal: true,
        priority: 100,
        link: function link(scope, element) {
            element.attr('ng-section', '');
            element.attr('ng-swipe-left', 'swipeLeft()');
            element.attr('ng-swipe-right', 'swipeRight()');
            element.removeAttr('ng-slide'); //remove the attribute to avoid indefinite loop

            $compile(element)(scope);
        },
        controller: ['$scope', function ($scope) {
            $scope.swipeLeft = function () {
                navigation.swipeLeft();
            };

            $scope.swipeRight = function () {
                navigation.swipeRight();
            };
        }]
    }
}]);