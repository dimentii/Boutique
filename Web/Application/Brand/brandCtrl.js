'use strict';

boutiqueControllers.controller('BrandController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'brand view';

        $scope.swipeUp = function () {
            $location.url('/Index/About');
        };

        $scope.swipeDown = function () {
            $location.url('/Index/About');
        };
    }
]);