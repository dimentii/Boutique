'use strict';

boutique.directive('ngNavbar', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        templateUrl: '/Application/Common/Navigation/navbar.html',
        controller: function ($scope) {
            $scope.sections = navigation.sections;

            $scope.navigateToBrand = function () {
                navigation.navigateToBrand();
            };

            $scope.navigate = function (link) {
                navigation.navigateTo(link);
            };

            $scope.$on('slide:changed', function (event, args) {
                $scope.sections = args.sections;
            });
        }
    }
}]);