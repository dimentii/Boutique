'use strict';

describe('FamilylookController', function() {
    var scope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        $controllerConstructor = $controller;
    }));

    it('should has correct text', function() {
        var mockText = 'family look view';
        $controllerConstructor('FamilylookController', {$scope: scope });

        expect(scope.text).toBe(mockText);
    });
});