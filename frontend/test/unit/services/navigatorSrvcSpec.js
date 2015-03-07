'use strict';

describe('NavigatorService', function() {
    var mockMapping, mockLocation, rootScope,
        currentLocation = 'location',
        eventName = 'direction:changed',
        link = 'upper', emptyLink = '',
        isMovingUp = true;

    beforeEach(module('boutique'));

    describe('changeLocationUp', function () {
        beforeEach(function () {
            mockMapping = {
                getUpperLink: function() {}
            };
            sinon.stub(mockMapping, 'getUpperLink').returns(link);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getUpperLink method', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(mockMapping.getUpperLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should change location to link', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should broadcast up direction', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeUpDirection});
        }));
    });

    describe('changeLocationUp', function () {
        beforeEach(function () {
            mockMapping = {
                getUpperLink: function() {}
            };
            sinon.stub(mockMapping, 'getUpperLink').returns(emptyLink);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getUpperLink method', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(mockMapping.getUpperLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should not call $location.url method', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(mockLocation.url.called).toBe(false);
        }));

        it('should not broadcast direction', inject(function (navigator) {
            navigator.changeLocationUp();
            expect(rootScope.$broadcast).not.toHaveBeenCalled();
        }));
    });

    describe('changeLocationDown', function () {
        beforeEach(function () {
            mockMapping = {
                getDownLink: function() {}
            };
            sinon.stub(mockMapping, 'getDownLink').returns(link);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getDownLink method', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(mockMapping.getDownLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should change location to link', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should broadcast down direction', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeDownDirection});
        }));
    });

    describe('changeLocationDown', function () {
        beforeEach(function () {
            mockMapping = {
                getDownLink: function() {}
            };
            sinon.stub(mockMapping, 'getDownLink').returns(emptyLink);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getDownLink method', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(mockMapping.getDownLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should not call $location.url method', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(mockLocation.url.called).toBe(false);
        }));

        it('should not broadcast direction', inject(function (navigator) {
            navigator.changeLocationDown();
            expect(rootScope.$broadcast).not.toHaveBeenCalled();
        }));
    });

    describe('changeLocationLeft', function () {
        beforeEach(function () {
            mockMapping = {
                getLeftLink: function() {}
            };
            sinon.stub(mockMapping, 'getLeftLink').returns(link);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getLeftLink method', inject(function (navigator) {
            navigator.changeLocationLeft();
            expect(mockMapping.getLeftLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should call $location.url method', inject(function (navigator) {
            navigator.changeLocationLeft();
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should broadcast left direction', inject(function (navigator) {
            navigator.changeLocationLeft();
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeLeftDirection});
        }));
    });

    describe('changeLocationRight', function () {
        beforeEach(function () {
            mockMapping = {
                getRightLink: function() {}
            };
            sinon.stub(mockMapping, 'getRightLink').returns(link);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should get link from mapping.getRightLink method', inject(function (navigator) {
            navigator.changeLocationRight();
            expect(mockMapping.getRightLink.calledWith(currentLocation)).toBe(true);
        }));

        it('should call $location.url method', inject(function (navigator) {
            navigator.changeLocationRight();
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should broadcast right direction', inject(function (navigator) {
            navigator.changeLocationRight();
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeRightDirection});
        }));
    });

    describe('changeLocationTo', function () {
        beforeEach(function () {
            mockMapping = {
                isMovingUp: function() {}
            };
            sinon.stub(mockMapping, 'isMovingUp').returns(isMovingUp);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should broadcast down direction', inject(function (navigator) {
            navigator.changeLocationTo(link);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeDownDirection});
        }));

        it('should change location to link', inject(function (navigator) {
            navigator.changeLocationTo(link);
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should not call mapping.isMovingUp method', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(mockMapping.isMovingUp.called).toBe(false);
        }));

        it('should not broadcast direction', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(rootScope.$broadcast).not.toHaveBeenCalled();
        }));

        it('should not call $location.url method', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(mockLocation.url.called).toBe(false);
        }));
    });

    describe('changeLocationTo', function () {
        beforeEach(function () {
            mockMapping = {
                isMovingUp: function() {}
            };
            sinon.stub(mockMapping, 'isMovingUp').returns(!isMovingUp);

            mockLocation = {
                path: function() {},
                url: function() {}
            };
            sinon.stub(mockLocation, 'path').returns(currentLocation);
            sinon.stub(mockLocation, 'url');

            module(function ($provide) {
                $provide.value('mapping', mockMapping);
                $provide.value('$location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should broadcast up direction', inject(function (navigator) {
            navigator.changeLocationTo(link);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {direction: navigator.swipeUpDirection});
        }));

        it('should change location to link', inject(function (navigator) {
            navigator.changeLocationTo(link);
            expect(mockLocation.url.calledWith(link)).toBe(true);
        }));

        it('should not call mapping.isMovingUp method', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(mockMapping.isMovingUp.called).toBe(false);
        }));

        it('should not broadcast direction', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(rootScope.$broadcast).not.toHaveBeenCalled();
        }));

        it('should not call $location.url method', inject(function (navigator) {
            navigator.changeLocationTo(currentLocation);
            expect(mockLocation.url.called).toBe(false);
        }));
    });
});