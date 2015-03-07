'use strict';

describe('NavigationService', function() {
    var mockNavigator;

    beforeEach(module('boutique'));

    beforeEach(function() {
        mockNavigator = sinon.stub({
            changeLocationUp: function(){},
            changeLocationDown: function(){},
            changeLocationLeft: function(){},
            changeLocationRight: function(){},
            changeLocationTo: function(){},
            swipeUpDirection: 'swipe-up'
        });

        module(function($provide){
            $provide.value('navigator', mockNavigator);
        });
    });

    describe('swipeUp', function() {
        it('should call navigator.changeLocationUp method', inject(function(navigation) {
            navigation.swipeUp();
            expect(mockNavigator.changeLocationUp.calledWith()).toBe(true);
        }))
    });

    describe('swipeDown', function() {
        it('should call navigator.changeLocationDown method', inject(function(navigation) {
            navigation.swipeDown();
            expect(mockNavigator.changeLocationDown.calledWith()).toBe(true);
        }))
    });

    describe('swipeLeft', function() {
        it('should call navigator.changeLocationLeft method', inject(function(navigation) {
            navigation.swipeLeft();
            expect(mockNavigator.changeLocationLeft.calledWith()).toBe(true);
        }))
    });

    describe('swipeRight', function() {
        it('should call navigator.changeLocationRight method', inject(function(navigation) {
            navigation.swipeRight();
            expect(mockNavigator.changeLocationRight.calledWith()).toBe(true);
        }))
    });

    describe('scroll', function() {
        it('should call navigator.changeLocationUp method', inject(function(navigation) {
            var direction = 'swipe-up';
            navigation.scroll(direction);
            expect(mockNavigator.changeLocationUp.calledWith()).toBe(true);
        }));

        it('should call navigator.changeLocationDown method', inject(function(navigation) {
            var direction = 'not-swipe-up';
            navigation.scroll(direction);
            expect(mockNavigator.changeLocationDown.calledWith()).toBe(true);
        }));
    });

    describe('navigateTo', function() {
        it('should call navigator.navigateTo method with parameter', inject(function(navigation) {
            var link = 'url';
            navigation.navigateTo(link);
            expect(mockNavigator.changeLocationTo.calledWith(link)).toBe(true);
        }))
    });
});