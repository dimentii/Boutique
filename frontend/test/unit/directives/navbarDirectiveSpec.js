'use strict';

describe('NavbarDirective', function() {
    var el, scope, mockNavigation,
        eventName = 'slide:changed',
        link = 'link';

    beforeEach(module('boutique'));
    beforeEach(module('html/navbar.html'));

    function setup(rootScope, compile) {
        scope = rootScope;
        scope.brand = {
            name: 'Brand',
            link: 'BrandUrl'
        };

        scope.about = {
            name: 'About',
            link: 'AboutUrl'
        };

        scope.services = {
            name: 'Services',
            link: 'ServicesUrl'
        };

        scope.navigate = function () { };

        el = angular.element('<div ng-navbar></div>');
        compile(el)(scope);
        scope.$digest();
    }

    function findElementByName(name) {
        var anchors = el.find('.navbar-nav a');
        var result;
        $.each(anchors, function(ind, elem) {
            if(angular.element(elem).text() === name) {
                result = angular.element(elem);
                return false;
            }
        });
        return result;
    }

    beforeEach(function() {

        mockNavigation = sinon.stub({
            navigateTo: function() {}
        });

        module(function($provide){
            $provide.value('navigation', mockNavigation);
        });

    });

    it('should has correct brand text in brand navigation element', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        expect(el.find('.navbar-brand').text()).toBe(scope.brand.name);
    }));

    it('should call navigation.navigateTo with correct brand url', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        el.find('.navbar-brand').click();
        expect(mockNavigation.navigateTo.calledWith(scope.brand.link)).toBe(true);
    }));

    it('should has correct about text in about navigation element', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        expect(el.find('.navbar-nav').text()).toContain(scope.about.name);
    }));

    it('should call navigation.navigateTo with correct about url', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        var aboutAnchor = findElementByName(scope.about.name);
        aboutAnchor.click();
        expect(mockNavigation.navigateTo.calledWith(scope.about.link)).toBe(true);
    }));

    it('should has correct services text in services navigation element', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        expect(el.find('.navbar-nav').text()).toContain(scope.services.name);
    }));

    it('should call navigation.navigateTo with correct services url', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        var aboutAnchor = findElementByName(scope.services.name);
        aboutAnchor.click();
        expect(mockNavigation.navigateTo.calledWith(scope.services.link)).toBe(true);
    }));

    it('should handle event with correct parameter', inject(function($rootScope, $compile) {
        setup($rootScope, $compile);
        $rootScope.$broadcast(eventName, {newLink: link});
        scope.$digest();
        expect(scope.services.link).toBe(link);
    }));
});