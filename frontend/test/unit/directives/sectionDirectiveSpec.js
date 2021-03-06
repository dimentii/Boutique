'use strict';

describe('SectionDirective', function() {
    var el, scope;

    beforeEach(module('boutique'));

    beforeEach(inject(function($rootScope, $controller, $compile){
        el = angular.element('<div ng-section></div>');
        $compile(el)($rootScope);
        $rootScope.$digest();

        scope = el.data('$scope');
    }));

    it('should contain ng-swipe-up attribute', function() {
        expect(el.attr('ng-swipe-up')).toBe('swipeUp()');
    });

    it('should contain ng-swipe-down attribute', function() {
        expect(el.attr('ng-swipe-down')).toBe('swipeDown()');
    });

    it('should contain scroll attribute', function() {
        expect(el.attr('ng-scroll')).toBe('scroll(direction)');
    });

    it('should contain swipeUp method', function() {
        expect(scope.swipeUp).toBeDefined();
    });

    it('should contain swipeDown method', function() {
        expect(scope.swipeDown).toBeDefined();
    });

    it('should contain scroll method', function() {
        expect(scope.scroll).toBeDefined();
    });
});