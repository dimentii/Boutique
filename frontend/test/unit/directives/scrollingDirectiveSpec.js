'use strict';

describe('ScrollingDirective', function() {
    var el, scope, event,
        upDirection = 'swipe-up',
        downDirection = 'swipe-down';

    beforeEach(module('boutique'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;
        scope.scroll = function() {};

        el = angular.element('<div ng-scroll="scroll(direction)"></div>');
        $compile(el)(scope);
        scope.$digest();

        spyOn(scope, 'scroll');
    }));

    describe('at IE and Chrome browsers', function() {

        beforeEach(function(){
            event = $.Event('mousewheel');
        });

        it('should call scroll method of parent scope', function() {
            event.originalEvent = { wheelDelta: -1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalled();
        });

        it('should call scroll method with swipe-up direction', function() {
            event.originalEvent = { wheelDelta: -1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalledWith(upDirection);
        });

        it('should call scroll method with swipe-down direction', function() {
            event.originalEvent = { wheelDelta: 1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalledWith(downDirection);
        });
    });

    describe('at Firefox browser', function() {

        beforeEach(function(){
            event = $.Event('DOMMouseScroll');
        });

        it('should call scroll method of parent scope', function() {
            event.originalEvent = { detail: 1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalled();
        });

        it('should call scroll method with swipe-up direction', function() {
            event.originalEvent = { detail: 1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalledWith(upDirection);
        });

        it('should call scroll method with swipe-down direction', function() {
            event.originalEvent = { detail: -1 };

            $(el).triggerHandler(event);
            expect(scope.scroll).toHaveBeenCalledWith(downDirection);
        });
    })
});