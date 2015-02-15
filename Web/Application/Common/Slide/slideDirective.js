'use strict';

boutique.directive('ngSlide', ['navigation', '$compile', function (navigation, $compile) {
    return {
        restrict: 'A',
        require: 'ngSection',
        link: function (scope, element, attrs) {
            attrs.$set('ngSwipeLeft', 'slideLeft()');
            $compile(element.contents())(scope);
        },
        controller: function ($scope) {
            $scope.slideLeft = function () {
                navigation.slideLeft();
            };
        }
    }
}]);