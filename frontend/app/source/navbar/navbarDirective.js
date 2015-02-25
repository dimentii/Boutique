'use strict';

angular.module('boutique').directive('ngNavbar', ['navigation', function (navigation) {
    return {
        restrict: 'A',
        templateUrl: 'frontend/app/main/navbar/navbar.html',
        /* Use this when publish to IIS */ 
        //templateUrl: '/Production/Application/Common/Navigation/navbar.html',
        controller: ['$scope', function ($scope) {
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
        }]
    }
}]);