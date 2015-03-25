'use strict';

angular.module('boutique').directive('ngMoveUp', [function () {
    return {
        restrict: 'A',
        templateUrl: 'html/up.html',
        link: function (scope, element) {
            element.on('click', function () {
                scope.swipeDown();
            });
        },
        controller: ['$scope', 'navigation', function($scope, navigation){
            $scope.down = function() {
                $scope.swipeDown();
                /*navigation.swipeDown();*/
            }
        }]
    }
}]);
