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
                templateUrl: 'app/brand/brand.html',
                controller: 'BrandController'
            })
            .when('/Index/About', {
                templateUrl: 'app/about/about.html',
                controller: 'AboutController'
            })
            .when('/Index/Services/Familylook', {
                templateUrl: 'app/services/familylook.html',
                controller: 'FamilylookController'
            })
            .when('/Index/Services/Sizeplus', {
                templateUrl: 'app/services/sizeplus.html',
                controller: 'SizeplusController'
            })
            .when('/Index/Services/Dress', {
                templateUrl: 'app/services/dress.html',
                controller: 'DressController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);