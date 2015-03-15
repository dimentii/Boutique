'use strict';

angular.module('boutiqueControllers').controller('RequestController', ['$scope',
    function ($scope) {
        $scope.files = [];

        $scope.send = function(data, details) {

        };

        angular.element('input[type="file"]').on('change', function(event) {
            if(event.target.files.length > 0){
                for(var count = 0; count < event.target.files.length; count ++){
                    $scope.files.push(event.target.files[count]);
                }
            }
        })
    }
]);