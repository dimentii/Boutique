'use strict';

describe('SlideDirective', function() {
    var el, scope;

    beforeEach(module('boutique'));

    beforeEach(inject(function($rootScope, $controller, $compile){
        el = angular.element('<div ng-slide></div>');
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

    it('should contain ng-swipe-left attribute', function() {
        expect(el.attr('ng-swipe-left')).toBe('swipeLeft()');
    });

    it('should contain ng-swipe-right attribute', function() {
        expect(el.attr('ng-swipe-right')).toBe('swipeRight()');
    });

    it('should contain scroll attribute', function() {
        expect(el.attr('ng-scroll')).toBe('scroll(direction)');
    });

    it('should contain swipeLeft method', function() {
        expect(scope.swipeUp).toBeDefined();
    });

    it('should contain swipeRight method', function() {
        expect(scope.swipeDown).toBeDefined();
    });
});