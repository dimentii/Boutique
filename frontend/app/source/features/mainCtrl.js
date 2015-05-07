'use strict';

angular.module('boutiqueControllers').controller('MainController', ['$scope', 'location',
    function ($scope, location) {
        $scope.direction = '';
        $scope.samplesView = false;

        $scope.$on('direction:changed', function (event, args) {
            $scope.direction = args.direction;
        });

        $scope.$on('$locationChangeStart', function(obj, next){
            var index = next.indexOf(location.samplesUrl);
            $scope.samplesView = index > 0;
        });
    }
]);