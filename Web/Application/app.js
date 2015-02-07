'use strict';

var boutique = angular.module('boutique', [
    'ngRoute',
    'boutiqueControllers',
    'angular-gestures'
]);

var boutiqueControllers = angular.module('boutiqueControllers', []);

boutique.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Index/Brand', {
                templateUrl: 'Application/Brand/brand.html',
                controller: 'BrandController'
            })
            .when('/Index/About', {
                templateUrl: 'Application/About/about.html',
                controller: 'AboutController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);