'use strict';

boutiqueControllers.controller('BrandController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'brand view';

        $scope.swipeLeft = function () {
            $location.url('/Index/About');
        };

        $scope.swipeUp = function () {
            $location.url('/Index/About');
        };
    }
]);