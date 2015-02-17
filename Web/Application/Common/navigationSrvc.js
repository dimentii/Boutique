'use strict';

boutiqueServices.factory('navigation', ['$location', '$rootScope',
    function ($location, $rootScope) {
        var brandUrl = '/Index/Brand';
        var aboutUrl = '/Index/About';
        var familylookUrl = '/Index/Services/Familylook';
        var dressUrl = '/Index/Services/Dress';
        var sizeplusUrl = '/Index/Services/Sizeplus';

        var slidesMap = [familylookUrl, dressUrl, sizeplusUrl];
        var siteMap = [brandUrl, aboutUrl, familylookUrl];

        var slidesMapPosition = (function () {
            for (var i = 0; i < slidesMap.length; i++) {
                var position = siteMap.indexOf(slidesMap[i]);
                if (position < 0) {
                    continue;
                }
                return position;
            }
        })();

        var swipeUpDirection = 'swipe-up';
        var swipeDownDirection = 'swipe-down';
        var swipeLeftDirection = 'swipe-left';
        var swipeRightDirection = 'swipe-right';

        function getMapIndex() {
            var currentLocation = $location.path();

            var currentIndex = siteMap.indexOf(currentLocation);

            return currentIndex;
        };

        function getSlideIndex() {
            var currentSlide = $location.path();

            var currentIndex = slidesMap.indexOf(currentSlide);

            return currentIndex;
        };

        function getDirection(link) {
            var currentIndex = getMapIndex();

            var newIndex = siteMap.indexOf(link);

            if (currentIndex === newIndex) {
                return '';
            }

            return currentIndex > newIndex ? swipeDownDirection : swipeUpDirection;
        };

        function changeLocationDown(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeDownDirection });

            if (index > 0) {
                $location.url(siteMap[index - 1]);
            }
        };

        function changeLocationUp(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeUpDirection });

            if (index < (siteMap.length - 1)) {
                $location.url(siteMap[index + 1]);
            }
        };

        function changeLocationRight(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeRightDirection });

            if (index === 0) {
                siteMap[slidesMapPosition] = slidesMap[slidesMap.length - 1];
                $location.url(slidesMap[slidesMap.length - 1]);
            } else {
                siteMap[slidesMapPosition] = slidesMap[--index];
                $location.url(slidesMap[index]);
            }

            updateSections();
            $rootScope.$broadcast('slide:changed', { sections: sections });
        };

        function changeLocationLeft(index) {
            $rootScope.$broadcast('direction:changed', { direction: swipeLeftDirection });

            if (index === (slidesMap.length - 1)) {
                siteMap[slidesMapPosition] = slidesMap[0];
                $location.url(slidesMap[0]);
            } else {
                siteMap[slidesMapPosition] = slidesMap[++index];
                $location.url(slidesMap[index]);
            }

            updateSections();
            $rootScope.$broadcast('slide:changed', { sections: sections });
        };

        function updateSections() {
            sections[1]['link'] = siteMap[slidesMapPosition];
        };

        // public

        var sections = [
            { name: 'About', link: aboutUrl },
            { name: 'Services', link: siteMap[slidesMapPosition] }
        ];

        function swipeUp() {
            var currentIndex = getMapIndex();

            changeLocationUp(currentIndex);
        };

        function swipeDown() {
            var currentIndex = getMapIndex();

            changeLocationDown(currentIndex);
        };

        function swipeLeft() {
            var currentSlideIndex = getSlideIndex();

            changeLocationLeft(currentSlideIndex);
        };

        function swipeRight() {
            var currentSlideIndex = getSlideIndex();

            changeLocationRight(currentSlideIndex);
        };

        function scroll(direction) {
            var currentIndex = getMapIndex();

            direction === swipeUpDirection ? changeLocationUp(currentIndex) : changeLocationDown(currentIndex);
        };

        function navigateTo(link) {
            var direction = getDirection(link);

            $rootScope.$broadcast('direction:changed', { direction: direction });

            $location.url(link);
        };

        function navigateToBrand(){
            navigateTo(brandUrl);
        };

        return {
            swipeUp: swipeUp,
            swipeDown: swipeDown,
            swipeLeft: swipeLeft,
            swipeRight: swipeRight,
            scroll: scroll,            
            navigateTo: navigateTo,
            navigateToBrand: navigateToBrand,
            sections: sections
        }
    }
]);