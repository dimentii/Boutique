'use strict';

boutiqueControllers.controller('AboutController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'about section';

        $scope.swipeDown = function () {
            $scope.$parent.direction = 'down';
            $location.url('/Index/Brand');
        };
    }
]);