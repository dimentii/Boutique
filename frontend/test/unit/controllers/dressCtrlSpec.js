'use strict';

describe('DressController', function() {
    var scope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        $controllerConstructor = $controller;
    }));

    it('should has correct text', function() {
        var mockText = 'dress service view';
        $controllerConstructor('DressController', {$scope: scope });

        expect(scope.text).toBe(mockText);
    });
});