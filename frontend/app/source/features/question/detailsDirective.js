'use strict';

angular.module('boutique').directive('ngDetails', ['sender', function (sender) {
    return {
        restrict: 'A',
        templateUrl: 'html/details.html',
        controller: ['$scope', function($scope) {
            $scope.files = [];

            $scope.send = function(data, details) {
                if(details.$invalid){
                    return;
                }

                sender.send(data, $scope.files);
            };
        }]
    }
}]);