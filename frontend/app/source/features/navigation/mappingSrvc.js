'use strict';

angular.module('boutiqueServices').factory('mapping', ['$rootScope', 'location',
    function($rootScope, location) {

        function getUpperLink(currentLocation) {
            var siteMap = location.siteMap;
            var currentIndex = siteMap.indexOf(currentLocation);
            var upperLink = '';
            if (currentIndex < (siteMap.length - 1)) {
                upperLink = siteMap[currentIndex + 1];
            }
            return upperLink;
        }

        function getDownLink(currentLocation) {
            var siteMap = location.siteMap;
            var currentIndex = siteMap.indexOf(currentLocation);
            var downLink = '';
            if(currentIndex > 0){
                downLink = siteMap[currentIndex - 1];
            }
            return downLink;
        }

        function getLeftLink(currentLocation) {
            var slidesMap = location.slidesMap;
            var siteMap = location.siteMap;
            var slidesMapPosition = location.slidesMapPosition;

            var currentIndex = slidesMap.indexOf(currentLocation);
            var nextUrl = currentIndex === (slidesMap.length - 1) ? slidesMap[0] : slidesMap[++currentIndex];
            siteMap[slidesMapPosition] = nextUrl;

            $rootScope.$broadcast('slide:changed', { newLink: nextUrl });

            return nextUrl;
        }

        function getRightLink(currentLocation) {
            var slidesMap = location.slidesMap;
            var siteMap = location.siteMap;
            var slidesMapPosition = location.slidesMapPosition;

            var currentIndex = slidesMap.indexOf(currentLocation);
            var nextUrl = currentIndex === 0 ? slidesMap[slidesMap.length - 1] : slidesMap[--currentIndex];
            siteMap[slidesMapPosition] = nextUrl;

            $rootScope.$broadcast('slide:changed', {newLink: nextUrl});

            return nextUrl;
        }

        function isMovingUp(currentLink, nextLink) {
            var siteMap = location.siteMap;
            return siteMap.indexOf(currentLink) > siteMap.indexOf(nextLink);
        }

        return {
            getUpperLink: getUpperLink,
            getDownLink: getDownLink,
            getLeftLink: getLeftLink,
            getRightLink: getRightLink,
            isMovingUp: isMovingUp
        }
    }
]);