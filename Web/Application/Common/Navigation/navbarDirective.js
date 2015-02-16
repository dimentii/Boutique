'use strict';

boutique.directive('ngNavbar', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        templateUrl: '/Application/Common/Navigation/navbar.html',
        controller: function ($scope) {
            $scope.sections = navigation.sections;

            $scope.brandUrl = navigation.getBrandUrl();

            $scope.navigate = function (link) {
                navigation.navigateTo(link);
            };
        }
    }
}]);