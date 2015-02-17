'use strict';

var boutique = angular.module('boutique', [
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'boutiqueControllers',
    'boutiqueServices'
]);

var boutiqueControllers = angular.module('boutiqueControllers', []);

var boutiqueServices = angular.module('boutiqueServices', []);

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
            .when('/Index/Services/Familylook', {
                templateUrl: 'Application/Services/familylook.html',
                controller: 'FamilylookController'
            })
            .when('/Index/Services/Sizeplus', {
                templateUrl: 'Application/Services/sizeplus.html',
                controller: 'SizeplusController'
            })
            .when('/Index/Services/Dress', {
                templateUrl: 'Application/Services/dress.html',
                controller: 'DressController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);