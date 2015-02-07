'use strict';

boutiqueControllers.controller('AboutController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'about section';

        $scope.swipeUp = function () {
            $location.url('/Index/Brand');
        };

        $scope.swipeDown = function () {
            $location.url('/Index/Brand');
        };
    }
]);