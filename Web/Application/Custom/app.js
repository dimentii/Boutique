'use strict';

angular.module('boutique', [
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'boutiqueControllers',
    'boutiqueServices'
]);

angular.module('boutiqueControllers', []);

angular.module('boutiqueServices', []);

angular.module('boutique').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Index/Brand', {
                templateUrl: 'Application/Custom/Brand/brand.html',
                controller: 'BrandController'
            })
            .when('/Index/About', {
                templateUrl: 'Application/Custom/About/about.html',
                controller: 'AboutController'
            })
            .when('/Index/Services/Familylook', {
                templateUrl: 'Application/Custom/Services/familylook.html',
                controller: 'FamilylookController'
            })
            .when('/Index/Services/Sizeplus', {
                templateUrl: 'Application/Custom/Services/sizeplus.html',
                controller: 'SizeplusController'
            })
            .when('/Index/Services/Dress', {
                templateUrl: 'Application/Custom/Services/dress.html',
                controller: 'DressController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);