'use strict';

angular.module('boutiqueServices').factory('navigation', ['$location', '$rootScope',
    function ($location, $rootScope) {
        var brandUrl = '/Index/Brand';
        var aboutUrl = '/Index/About';
        var familylookUrl = '/Index/Services/Familylook';
        var dressUrl = '/Index/Services/Dress';
        var sizeplusUrl = '/Index/Services/Sizeplus';

        var defaultSlidesUrl = familylookUrl;

        var slidesMap = [familylookUrl, dressUrl, sizeplusUrl];
        var siteMap = [brandUrl, aboutUrl, defaultSlidesUrl];

        var slidesMapPosition = (function () {
            for (var i = 0; i < slidesMap.length; i++) {
                var position = siteMap.indexOf(slidesMap[i]);
                if (position < 0) {
                    continue;
                }
                return position;
            }
            return -1;
        })();

        var swipeUpDirection = 'swipe-up';
        var swipeDownDirection = 'swipe-down';
        var swipeLeftDirection = 'swipe-left';
        var swipeRightDirection = 'swipe-right';

        function getMapIndex() {
            var currentLocation = $location.path();

            return siteMap.indexOf(currentLocation);
        }

        function getSlideIndex() {
            var currentSlide = $location.path();

            return slidesMap.indexOf(currentSlide);
        }

        function getDirection(link) {
            var currentIndex = getMapIndex();

            var newIndex = siteMap.indexOf(link);

            if (currentIndex === newIndex) {
                return '';
            }

            return currentIndex > newIndex ? swipeDownDirection : swipeUpDirection;
        }

        function changeLocationDown(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeDownDirection });

            if (index > 0) {
                $location.url(siteMap[index - 1]);
            }
        }

        function changeLocationUp(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeUpDirection });

            if (index < (siteMap.length - 1)) {
                $location.url(siteMap[index + 1]);
            }
        }

        function changeLocationRight(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeRightDirection });

            var nextUrl = index === 0 ? slidesMap[slidesMap.length - 1] : slidesMap[--index];

            siteMap[slidesMapPosition] = nextUrl;
            $location.url(nextUrl);

            $rootScope.$broadcast('slide:changed', { newLink: nextUrl });
        }

        function changeLocationLeft(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeLeftDirection });

            var nextUrl = index === (slidesMap.length - 1) ? slidesMap[0] : slidesMap[++index];

            siteMap[slidesMapPosition] = nextUrl;
            $location.url(nextUrl);

            $rootScope.$broadcast('slide:changed', { newLink: nextUrl });
        }

        // public

        function swipeUp() {
            var currentIndex = getMapIndex();

            changeLocationUp(currentIndex);
        }

        function swipeDown() {
            var currentIndex = getMapIndex();

            changeLocationDown(currentIndex);
        }

        function swipeLeft() {
            var currentSlideIndex = getSlideIndex();

            changeLocationLeft(currentSlideIndex);
        }

        function swipeRight() {
            var currentSlideIndex = getSlideIndex();

            changeLocationRight(currentSlideIndex);
        }

        function scroll(direction) {
            var currentIndex = getMapIndex();

            direction === swipeUpDirection ? changeLocationUp(currentIndex) : changeLocationDown(currentIndex);
        }

        function navigateTo(link) {
            var direction = getDirection(link);

            $rootScope.$broadcast('direction:changed', { direction: direction });

            $location.url(link);
        }

        return {
            swipeUp: swipeUp,
            swipeDown: swipeDown,
            swipeLeft: swipeLeft,
            swipeRight: swipeRight,
            scroll: scroll,            
            navigateTo: navigateTo,

            brandUrl: brandUrl,
            aboutUrl: aboutUrl,
            defaultSlidesUrl: defaultSlidesUrl
        }
    }
]);