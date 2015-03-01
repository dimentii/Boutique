'use strict';

describe('BrandController', function() {
    var scope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        $controllerConstructor = $controller;
    }));

    it('should has correct text', function() {
        var mockText = 'brand view';
        $controllerConstructor('BrandController', {$scope: scope });

        expect(scope.text).toBe(mockText);
    });
});