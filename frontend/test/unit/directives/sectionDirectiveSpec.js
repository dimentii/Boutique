'use strict';

describe('SectionDirective', function() {
    var el, scope;

    beforeEach(module('boutique'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;

        el = angular.element('<div ng-section></div>');
        $compile(el)(scope);
        scope.$digest();

        //scope.swipeUp = sinon.stub(function() {});
        //scope.swipeDown = sinon.stub(function() {});
        //scope.scroll = sinon.stub(function() {});
    }));

    it('should contain ng-swipe-up attribute', function(){
        expect(el.attr('ng-swipe-up')).toBe('swipeUp()');
    });

    it('should contain ng-swipe-down attribute', function(){
        expect(el.attr('ng-swipe-down')).toBe('swipeDown()');
    });

    it('should contain scroll attribute', function(){
        expect(el.attr('ng-scroll')).toBe('scroll(direction)');
    });
});