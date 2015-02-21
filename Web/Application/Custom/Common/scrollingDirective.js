'use strict';

angular.module('boutique').directive('ngScroll', [function () {
    return {
        restrict: 'A',
        scope: {
            scroll: '&ngScroll'
        },
        link: function (scope, element) {
            element.on('mousewheel DOMMouseScroll', function (event) {
                var direction = (event.originalEvent.wheelDelta || -event.originalEvent.detail) > 0 ? 'swipe-down': 'swipe-up';

                scope.$apply(function (s) {
                    s.scroll({ direction: direction });
                });
            });
        }
    }
}]);