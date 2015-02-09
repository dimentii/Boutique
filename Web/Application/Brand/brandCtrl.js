'use strict';

boutiqueControllers.controller('BrandController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.text = 'brand view';

        $scope.slideUp = function () {
            $scope.$parent.direction = 'up';
            $location.url('/Index/About');
        };
    }
]);