'use strict';

angular.module('boutiqueControllers').controller('ContactsController', ['$scope',
    function ($scope) {
        $scope.adress = '5105 North Park Drive, S-806';
        $scope.city = 'Pennsauken, New Jersey';
        $scope.phone = '+1-609-314-4567';
    }
]);