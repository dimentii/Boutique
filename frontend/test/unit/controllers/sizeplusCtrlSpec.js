'use strict';

describe('SizeplusController', function() {
    var scope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        $controllerConstructor = $controller;
    }));

    it('should has correct text', function() {
        var mockText = 'sizeplus service view';
        $controllerConstructor('SizeplusController', {$scope: scope });

        expect(scope.text).toBe(mockText);
    });
});