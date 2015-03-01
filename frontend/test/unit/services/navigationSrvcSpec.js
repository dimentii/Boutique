'use strict';

describe('NavigationService', function() {
    var rootScope, navigationSrvc;

    beforeEach(module('boutique'));

    beforeEach(inject(function($rootScope, navigation) {
        rootScope = $rootScope;
        navigationSrvc = navigation;
    }));

    describe('swipeUp', function() {
        var mockNavigator;

        beforeEach(function() {
            mockNavigator = sinon.stub({changeLocationUp: function(){}});
            module(function($provide){
                $provide.value('navigator', mockNavigator);
            })
        });

        it('should broadcast direction', function() {
            var eventName = 'direction:changed';
            spyOn(rootScope, '$broadcast');
            navigationSrvc.swipeUp();
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: 'swipe-up'});
        });

        it('should call navigator.changeLocationUp method', function() {
            navigationSrvc.swipeUp();
            expect(mockNavigator.changeLocationUp).toHaveBeenCalled();
        })
    });
});