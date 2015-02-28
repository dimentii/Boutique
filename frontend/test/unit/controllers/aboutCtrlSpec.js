'use strict';

describe('AboutController', function() {
    var scope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        $controllerConstructor = $controller;
    }));

    it('Should has correct scope parameter text', function() {
        var mockText = 'about view';
        $controllerConstructor('AboutController', {$scope: scope });

        expect(scope.text).toBe(mockText);
    });
});
