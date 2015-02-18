'use strict';

boutique.directive('ngNavbar', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        templateUrl: '/Application/Common/Navigation/navbar.html',
        controller: function ($scope) {
            $scope.brand = {
                name: 'Brand',
                link: navigation.brandUrl
            };

            $scope.about = {
                name: 'About',
                link: navigation.aboutUrl
            };

            $scope.services = {
                name: 'Services',
                link: navigation.defaultSlidesUrl
            };

            $scope.navigate = function (link) {
                navigation.navigateTo(link);
            };

            $scope.$on('slide:changed', function (event, args) {
                $scope.services['link'] = args.newLink;
            });
        }
    }
}]);