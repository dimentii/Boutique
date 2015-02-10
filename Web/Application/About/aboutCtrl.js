'use strict';

boutiqueControllers.controller('AboutController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'about section';

        $scope.swipeDown = function () {
            $scope.$parent.direction = 'slide-down';
            $location.url('/Index/Brand');
        };

        $scope.scroll = function (direction) {
            if (direction !== 'slide-down') {
                return;
            }
            $scope.$parent.direction = direction;
            $location.url('/Index/Brand');
        };
    }
]);