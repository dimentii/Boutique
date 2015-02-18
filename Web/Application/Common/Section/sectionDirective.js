'use strict';

boutique.directive('ngSection', ['navigation', '$compile', function (navigation, $compile) {
    return {
        restrict: 'A',
        terminal: true,
        priority: 101,
        link: function link(scope, element) {
            element.attr('ng-swipe-up', 'swipeUp()');
            element.attr('ng-swipe-down', 'swipeDown()');
            element.attr('ng-scroll', 'scroll(direction)');
            element.removeAttr('ng-section'); //remove the attribute to avoid indefinite loop

            $compile(element)(scope);
        },
        controller: function ($scope) {
            $scope.swipeUp = function() {
                navigation.swipeUp();
            };

            $scope.swipeDown = function () {
                navigation.swipeDown();
            };

            $scope.scroll = function (direction) {
                navigation.scroll(direction);
            };
        }
    }
}]);