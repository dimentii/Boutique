'use strict';

boutique.directive('ngSection', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: '/Application/Common/Section/section.html',
        controller: function ($scope) {
            $scope.slideUp = function() {
                $scope.$parent.direction = 'slide-up';

                navigation.slideUp();
            };

            $scope.slideDown = function () {
                $scope.$parent.direction = 'slide-down';

                navigation.slideDown();
            };

            $scope.scroll = function (direction) {
                $scope.$parent.direction = direction;

                navigation.scroll(direction);
            };
        }
    }
}]);