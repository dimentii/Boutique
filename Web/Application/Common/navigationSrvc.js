'use strict';

boutiqueServices.factory('navigation', ['$location',
    function ($location) {
        var siteMap = ['/Index/Brand', '/Index/About'];
        var slideUpDirection = 'slide-up';

        function getMapIndex() {
            var currentLocation = $location.path();

            var currentIndex = siteMap.indexOf(currentLocation);

            return currentIndex;
        }

        function changeLocationDown(index) {
            if (index > 0) {
                $location.url(siteMap[index - 1]);
            }
        }

        function changeLocationUp(index) {
            if (index < (siteMap.length - 1)) {
                $location.url(siteMap[index + 1]);
            }
        }

        function slideUp() {
            var currentIndex = getMapIndex();

            changeLocationUp(currentIndex);
        }

        function slideDown() {
            var currentIndex = getMapIndex();

            changeLocationDown(currentIndex);
        }

        function scroll(direction) {
            var currentIndex = getMapIndex();

            direction === slideUpDirection ? changeLocationUp(currentIndex) : changeLocationDown(currentIndex);
        }

        return {
            slideUp: slideUp,
            slideDown: slideDown,
            scroll: scroll
        }
    }
]);