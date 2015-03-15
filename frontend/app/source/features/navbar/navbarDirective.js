'use strict';

angular.module('boutique').directive('ngNavbar', ['navigation', 'location', function (navigation, location) {
    return {
        restrict: 'A',
        templateUrl: 'html/navbar.html',
        controller: ['$scope', function ($scope) {
            $scope.brand = {
                name: 'Brand',
                link: location.brandUrl
            };

            $scope.about = {
                name: 'About',
                link: location.aboutUrl
            };

            $scope.services = {
                name: 'Services',
                link: location.defaultSlidesUrl
            };

            $scope.request = {
                name: 'Request',
                link: location.requestUrl
            };

            $scope.navigate = function (link) {
                navigation.navigateTo(link);
            };

            $scope.$on('slide:changed', function (event, args) {
                $scope.services['link'] = args.newLink;
            });
        }]
    }
}]);