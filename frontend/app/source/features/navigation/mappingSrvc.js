'use strict';

angular.module('boutiqueServices').factory('mapping', ['$rootScope', 'location',
    function($rootScope, location) {

        function getUpperLink(currentLocation) {
            var currentIndex = location.getSiteMapIndex(currentLocation);
            var upperLink = '';
            if (currentIndex < (location.siteMapLength - 1)) {
                upperLink = location.getSiteMapUrl(currentIndex + 1);
            }
            return upperLink;
        }

        function getDownLink(currentLocation) {
            var currentIndex = location.getSiteMapIndex(currentLocation);
            var downLink = '';
            if(currentIndex > 0){
                downLink = location.getSiteMapUrl(currentIndex - 1);
            }
            return downLink;
        }

        function getLeftLink(currentLocation) {
            var currentIndex = location.getSlidesMapIndex(currentLocation);

            var nextIndex = currentIndex === (location.slidesMapLength - 1) ? 0 : ++currentIndex;

            var nextUrl = location.getSlidesMapUrl(nextIndex);

            location.updateSiteMapCurrentSlide(nextUrl);

            $rootScope.$broadcast('slide:changed', { newLink: nextUrl });

            return nextUrl;
        }

        function getRightLink(currentLocation) {
            var currentIndex = location.getSlidesMapIndex(currentLocation);

            var nextIndex = currentIndex === 0 ? location.slidesMapLength - 1 : --currentIndex;

            var nextUrl = location.getSlidesMapUrl(nextIndex);

            location.updateSiteMapCurrentSlide(nextUrl);

            $rootScope.$broadcast('slide:changed', {newLink: nextUrl});

            return nextUrl;
        }

        function isMovingUp(currentLink, nextLink) {
            return location.getSiteMapIndex(currentLink) > location.getSiteMapIndex(nextLink);
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