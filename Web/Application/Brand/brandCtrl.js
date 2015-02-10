'use strict';

boutiqueControllers.controller('BrandController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'brand view';

        $scope.slideUp = function () {
            $scope.$parent.direction = 'slide-up';
            $location.url('/Index/About');
        };

        $scope.scroll = function (direction) {
            if (direction !== 'slide-up') {
                return;
            }
            $scope.$parent.direction = direction;
            $location.url('/Index/About');
        };
    }
]);