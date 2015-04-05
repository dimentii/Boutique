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
                templateUrl: 'html/brand.html',
                controller: 'BrandController'
            })
            .when('/Index/About', {
                templateUrl: 'html/about.html',
                controller: 'AboutController'
            })
            .when('/Index/Services/Familylook', {
                templateUrl: 'html/familylook.html',
                controller: 'FamilylookController'
            })
            .when('/Index/Services/Sizeplus', {
                templateUrl: 'html/sizeplus.html',
                controller: 'SizeplusController'
            })
            .when('/Index/Services/Dress', {
                templateUrl: 'html/dress.html',
                controller: 'DressController'
            })
            .when('/Index/Question', {
                templateUrl: 'html/question.html',
                controller: 'QuestionController'
            })
            .when('/Index/Contacts', {
                templateUrl: 'html/contacts.html',
                controller: 'ContactsController'
            })
            .otherwise({
                redirectTo: '/Index/Brand'
            });
        $locationProvider.html5Mode(true);
    }
]);
