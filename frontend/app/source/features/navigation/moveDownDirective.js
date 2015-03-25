'use strict';

angular.module('boutique').directive('ngMoveDown', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        templateUrl: 'html/down.html',
        link: function (scope, element) {
            element.on('click', function () {
                navigation.swipeUp();
            });
        }
    }
}]);