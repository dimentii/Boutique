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
                templateUrl: 'frontend/app/views/brand/brand.html',
                controller: 'BrandController'
            })
            .when('/Index/About', {
                templateUrl: 'frontend/app/views/about/about.html',
                controller: 'AboutController'
            })
            .when('/Index/Services/Familylook', {
                templateUrl: 'frontend/app/views/services/familylook.html',
                controller: 'FamilylookController'
            })
            .when('/Index/Services/Sizeplus', {
                templateUrl: 'frontend/app/views/services/sizeplus.html',
                controller: 'SizeplusController'
            })
            .when('/Index/Services/Dress', {
                templateUrl: 'frontend/app/views/services/dress.html',
                controller: 'DressController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);