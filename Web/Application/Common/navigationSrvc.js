'use strict';

boutiqueServices.factory('navigation', ['$location', '$rootScope',
    function ($location, $rootScope) {
        var siteMap = ['/Index/Brand', '/Index/About', '/Index/Services'];

        var swipeUpDirection = 'swipe-up';
        var swipeDownDirection = 'swipe-down';

        function getMapIndex() {
            var currentLocation = $location.path();

            var currentIndex = siteMap.indexOf(currentLocation);

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

        // public

        var sections = [
            { name: 'About', link: siteMap[1] },
            { name: 'Services', link: siteMap[2] }
        ];

        function getBrandUrl() {
            return siteMap[0];
        };

        function swipeUp() {
            var currentIndex = getMapIndex();

            changeLocationUp(currentIndex);
        };

        function swipeDown() {
            var currentIndex = getMapIndex();

            changeLocationDown(currentIndex);
        };

        function swipeLeft() {
            console.log('To the left');
        };

        function swipeRight() {
            console.log('To the right');
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

        return {
            swipeUp: swipeUp,
            swipeDown: swipeDown,
            swipeLeft: swipeLeft,
            swipeRight: swipeRight,
            scroll: scroll,            
            navigateTo: navigateTo,
            sections: sections,
            getBrandUrl: getBrandUrl
        }
    }
]);