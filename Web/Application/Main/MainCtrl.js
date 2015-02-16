'use strict';

boutiqueControllers.controller('MainController', ['$scope',
    function ($scope) {
        $scope.direction = '';

        $scope.$on('direction:changed', function (event, args) {
            $scope.direction = args.direction;
        });
    }
]);