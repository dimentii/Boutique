'use strict';

boutiqueControllers.controller('FamilylookController', ['$scope',
    function ($scope) {
        $scope.text = 'family look view';

        $scope.swipeLeftHard = function () {
            console.log('hard left');
        };

        $scope.swipeRightHard = function () {
            console.log('hard right');
        }
    }
]);