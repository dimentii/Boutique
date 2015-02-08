'use strict';

boutiqueControllers.controller('AboutController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'about section';

        $scope.swipeLeft = function ($event) {
            $location.url('/Index/Brand');
        };
    }
]);