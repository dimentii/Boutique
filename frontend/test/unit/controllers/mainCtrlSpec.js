'use strict';

describe('MainController', function(){
    var scope, rootScope, $controllerConstructor;

    beforeEach(module('boutique'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope;

        $controllerConstructor = $controller;
    }));

    it('should has correct text', function() {
        var mockDirection = '';
        var newDirection = 'left';
        $controllerConstructor('MainController', {$scope: scope });

        expect(scope.direction).toBe(mockDirection);

        rootScope.$broadcast('direction:changed', { direction: newDirection });

        expect(scope.direction).toBe(newDirection);
    });
});