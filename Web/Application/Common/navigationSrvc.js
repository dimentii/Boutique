'use strict';

boutiqueServices.factory('navigation', ['$location',
    function ($location) {
        var siteMap = ['/Index/Brand', '/Index/About', '/Index/Services'];

        var slideUpDirection = 'slide-up';
        var slideDownDirection = 'slide-down';

        function getMapIndex() {
            var currentLocation = $location.path();

            var currentIndex = siteMap.indexOf(currentLocation);

            return currentIndex;
        };

        function changeLocationDown(index) {
            if (index > 0) {
                $location.url(siteMap[index - 1]);
            }
        };

        function changeLocationUp(index) {
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

        function getDirection(link) {
            var currentIndex = getMapIndex();

            var newIndex = siteMap.indexOf(link);

            if (currentIndex === newIndex) {
                return '';
            }

            return currentIndex > newIndex ? slideDownDirection : slideUpDirection;
        };

        function slideUp() {
            var currentIndex = getMapIndex();

            changeLocationUp(currentIndex);
        };

        function slideDown() {
            var currentIndex = getMapIndex();

            changeLocationDown(currentIndex);
        };

        function slideLeft() {
            console.log('To the left');
        };

        function slideRight() {
            console.log('To the right');
        };

        function scroll(direction) {
            var currentIndex = getMapIndex();

            direction === slideUpDirection ? changeLocationUp(currentIndex) : changeLocationDown(currentIndex);
        };

        function navigateTo(link) {
            $location.url(link);
        };

        return {
            slideUp: slideUp,
            slideDown: slideDown,
            scroll: scroll,
            sections: sections,
            getDirection: getDirection,
            navigateTo: navigateTo,
            getBrandUrl: getBrandUrl,
            slideLeft: slideLeft,
            slideRight: slideRight
        }
    }
]);