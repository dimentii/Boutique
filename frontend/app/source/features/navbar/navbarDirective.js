'use strict';

angular.module('boutique').directive('ngNavbar', ['navigation', 'location', function (navigation, location) {
    return {
        restrict: 'A',
        templateUrl: 'html/navbar.html',
        /* Use this when publish to IIS */ 
        //templateUrl: '/Production/Application/Common/Navigation/navbar.html',
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

            $scope.navigate = function (link) {
                navigation.navigateTo(link);
            };

            $scope.$on('slide:changed', function (event, args) {
                $scope.services['link'] = args.newLink;
            });
        }]
    }
}]);