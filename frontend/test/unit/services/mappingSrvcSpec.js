'use strict';

describe('MappingService', function() {
    var mockLocation, rootScope,
        eventName = 'slide:changed',
        siteMapLength = 3, slidesMapLength = 3,
        firstIndex = 0, middleIndex = 1, lastIndex = 2,
        currentLocation = 'location',
        nextLink = 'link', emptyLink = '';

    beforeEach(module('boutique'));

    describe('getUpperLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSiteMapIndex: function() {},
                getSiteMapUrl: function() {},
                siteMapLength: siteMapLength
            };
            sinon.stub(mockLocation, 'getSiteMapIndex').returns(middleIndex);
            sinon.stub(mockLocation, 'getSiteMapUrl').returns(nextLink);

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });
        });

        it('should call location.siteMapIndex', inject(function(mapping){
            mapping.getUpperLink(currentLocation);
            expect(mockLocation.getSiteMapIndex.calledWith(currentLocation)).toBe(true);
        }));

        it('should call location.getSiteMapUrl', inject(function(mapping){
            mapping.getUpperLink(currentLocation);
            expect(mockLocation.getSiteMapUrl.calledWith(middleIndex + 1)).toBe(true);
        }));

        it('should return next link', inject(function(mapping){
            var result = mapping.getUpperLink(currentLocation);
            expect(result).toBe(nextLink);
        }));
    });

    describe('getUpperLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSiteMapIndex: function() {},
                getSiteMapUrl: function() {},
                siteMapLength: siteMapLength
            };
            sinon.stub(mockLocation, 'getSiteMapIndex').returns(lastIndex);
            sinon.stub(mockLocation, 'getSiteMapUrl');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });
        });

        it('should call location.siteMapIndex', inject(function(mapping){
            mapping.getUpperLink(currentLocation);
            expect(mockLocation.getSiteMapIndex.calledWith(currentLocation)).toBe(true);
        }));

        it('should not call location.getSiteMapUrl', inject(function(mapping){
            mapping.getUpperLink(currentLocation);
            expect(mockLocation.getSiteMapUrl.called).toBe(false);
        }));

        it('should return empty link', inject(function(mapping){
            var result = mapping.getUpperLink(currentLocation);
            expect(result).toBe(emptyLink);
        }));
    });

    describe('getDownLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSiteMapIndex: function() {},
                getSiteMapUrl: function() {},
                siteMapLength: siteMapLength
            };
            sinon.stub(mockLocation, 'getSiteMapIndex').returns(middleIndex);
            sinon.stub(mockLocation, 'getSiteMapUrl').returns(nextLink);

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });
        });

        it('should call location.siteMapIndex', inject(function(mapping){
            mapping.getDownLink(currentLocation);
            expect(mockLocation.getSiteMapIndex.calledWith(currentLocation)).toBe(true);
        }));

        it('should call location.getSiteMapUrl', inject(function(mapping){
            mapping.getDownLink(currentLocation);
            expect(mockLocation.getSiteMapUrl.calledWith(middleIndex - 1)).toBe(true);
        }));

        it('should return next link', inject(function(mapping){
            var result = mapping.getDownLink(currentLocation);
            expect(result).toBe(nextLink);
        }));
    });

    describe('getDownLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSiteMapIndex: function() {},
                getSiteMapUrl: function() {},
                siteMapLength: siteMapLength
            };
            sinon.stub(mockLocation, 'getSiteMapIndex').returns(firstIndex);
            sinon.stub(mockLocation, 'getSiteMapUrl');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });
        });

        it('should call location.siteMapIndex', inject(function(mapping){
            mapping.getDownLink(currentLocation);
            expect(mockLocation.getSiteMapIndex.calledWith(currentLocation)).toBe(true);
        }));

        it('should not call location.getSiteMapUrl', inject(function(mapping){
            mapping.getDownLink(currentLocation);
            expect(mockLocation.getSiteMapUrl.called).toBe(false);
        }));

        it('should return empty link', inject(function(mapping){
            var result = mapping.getDownLink(currentLocation);
            expect(result).toBe(emptyLink);
        }));
    });

    describe('getLeftLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSlidesMapIndex: function() {},
                getSlidesMapUrl: function() {},
                updateSiteMapCurrentSlide: function() {},
                slidesMapLength: slidesMapLength
            };
            sinon.stub(mockLocation, 'getSlidesMapIndex').returns(middleIndex);
            sinon.stub(mockLocation, 'getSlidesMapUrl').returns(nextLink);
            sinon.stub(mockLocation, 'updateSiteMapCurrentSlide');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should call location.getSlidesMapUrl with next index', inject(function(mapping){
            mapping.getLeftLink(currentLocation);
            expect(mockLocation.getSlidesMapUrl.calledWith(middleIndex + 1)).toBe(true);
        }));

        it('should call location.updateSiteMapCurrentSlide', inject(function(mapping){
            mapping.getLeftLink(currentLocation);
            expect(mockLocation.updateSiteMapCurrentSlide.calledWith(nextLink)).toBe(true);
        }));

        it('should broadcast current slide change event', inject(function(mapping){
            var result = mapping.getLeftLink(currentLocation);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {newLink: nextLink});
        }));
    });

    describe('getLeftLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSlidesMapIndex: function() {},
                getSlidesMapUrl: function() {},
                updateSiteMapCurrentSlide: function() {},
                slidesMapLength: slidesMapLength
            };
            sinon.stub(mockLocation, 'getSlidesMapIndex').returns(lastIndex);
            sinon.stub(mockLocation, 'getSlidesMapUrl').returns(nextLink);
            sinon.stub(mockLocation, 'updateSiteMapCurrentSlide');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should call location.getSlidesMapUrl with next index', inject(function(mapping){
            mapping.getLeftLink(currentLocation);
            expect(mockLocation.getSlidesMapUrl.calledWith(firstIndex)).toBe(true);
        }));

        it('should call location.updateSiteMapCurrentSlide', inject(function(mapping){
            mapping.getLeftLink(currentLocation);
            expect(mockLocation.updateSiteMapCurrentSlide.calledWith(nextLink)).toBe(true);
        }));

        it('should broadcast current slide change event', inject(function(mapping){
            var result = mapping.getLeftLink(currentLocation);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {newLink: nextLink});
        }));
    });

    describe('getRightLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSlidesMapIndex: function() {},
                getSlidesMapUrl: function() {},
                updateSiteMapCurrentSlide: function() {},
                slidesMapLength: slidesMapLength
            };
            sinon.stub(mockLocation, 'getSlidesMapIndex').returns(middleIndex);
            sinon.stub(mockLocation, 'getSlidesMapUrl').returns(nextLink);
            sinon.stub(mockLocation, 'updateSiteMapCurrentSlide');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should call location.getSlidesMapUrl with next index', inject(function(mapping){
            mapping.getRightLink(currentLocation);
            expect(mockLocation.getSlidesMapUrl.calledWith(middleIndex - 1)).toBe(true);
        }));

        it('should call location.updateSiteMapCurrentSlide', inject(function(mapping){
            mapping.getRightLink(currentLocation);
            expect(mockLocation.updateSiteMapCurrentSlide.calledWith(nextLink)).toBe(true);
        }));

        it('should broadcast current slide change event', inject(function(mapping){
            var result = mapping.getRightLink(currentLocation);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {newLink: nextLink});
        }));
    });

    describe('getRightLink', function () {
        beforeEach(function () {
            mockLocation = {
                getSlidesMapIndex: function() {},
                getSlidesMapUrl: function() {},
                updateSiteMapCurrentSlide: function() {},
                slidesMapLength: slidesMapLength
            };
            sinon.stub(mockLocation, 'getSlidesMapIndex').returns(firstIndex);
            sinon.stub(mockLocation, 'getSlidesMapUrl').returns(nextLink);
            sinon.stub(mockLocation, 'updateSiteMapCurrentSlide');

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });

            inject(function($rootScope){
                rootScope = $rootScope;
            });

            spyOn(rootScope, '$broadcast');
        });

        it('should call location.getSlidesMapUrl with next index', inject(function(mapping){
            mapping.getRightLink(currentLocation);
            expect(mockLocation.getSlidesMapUrl.calledWith(lastIndex)).toBe(true);
        }));

        it('should call location.updateSiteMapCurrentSlide', inject(function(mapping){
            mapping.getRightLink(currentLocation);
            expect(mockLocation.updateSiteMapCurrentSlide.calledWith(nextLink)).toBe(true);
        }));

        it('should broadcast current slide change event', inject(function(mapping){
            var result = mapping.getRightLink(currentLocation);
            expect(rootScope.$broadcast).toHaveBeenCalledWith(eventName, {newLink: nextLink});
        }));
    });

    describe('isMovingUp', function () {
        beforeEach(function () {
            mockLocation = {
                getSiteMapIndex: function() {}
            };
            var callback = sinon.stub(mockLocation, 'getSiteMapIndex');
            callback.withArgs(currentLocation).returns(lastIndex);
            callback.withArgs(nextLink).returns(firstIndex);

            module(function ($provide) {
                $provide.value('location', mockLocation);
            });
        });

        it('should approve moving up', inject(function(mapping){
            var isMovingUp = mapping.isMovingUp(currentLocation, nextLink);
            expect(isMovingUp).toBe(true);
        }));

        it('should refute moving up', inject(function(mapping){
            var isMovingUp = mapping.isMovingUp(nextLink, currentLocation);
            expect(isMovingUp).toBe(false);
        }));
    });
});