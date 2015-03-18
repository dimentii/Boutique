'use strict';

angular.module('boutiqueServices').factory('location', [
    function() {
        var brandUrl = '/Index/Brand';
        var aboutUrl = '/Index/About';
        var familylookUrl = '/Index/Services/Familylook';
        var dressUrl = '/Index/Services/Dress';
        var sizeplusUrl = '/Index/Services/Sizeplus';
        var requestUrl = '/Index/Question';

        var defaultSlidesUrl = familylookUrl;

        var slidesMap = [familylookUrl, dressUrl, sizeplusUrl];
        var siteMap = [brandUrl, aboutUrl, defaultSlidesUrl, requestUrl];

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

        var siteMapLength = siteMap.length;
        var slidesMapLength = slidesMap.length;

        function getSiteMapIndex(url) {
            return siteMap.indexOf(url);
        }

        function getSiteMapUrl(index) {
            return siteMap[index];
        }

        function updateSiteMapCurrentSlide(newUrl) {
            siteMap[slidesMapPosition] = newUrl;
        }

        function getSlidesMapIndex(url) {
            return slidesMap.indexOf(url);
        }

        function getSlidesMapUrl(index) {
            return slidesMap[index];
        }

        return {
            siteMapLength: siteMapLength,
            slidesMapLength: slidesMapLength,

            getSiteMapIndex: getSiteMapIndex,
            getSiteMapUrl: getSiteMapUrl,
            updateSiteMapCurrentSlide: updateSiteMapCurrentSlide,
            getSlidesMapIndex: getSlidesMapIndex,
            getSlidesMapUrl: getSlidesMapUrl,

            brandUrl: brandUrl,
            aboutUrl: aboutUrl,
            defaultSlidesUrl: defaultSlidesUrl,
            requestUrl: requestUrl
        }
    }
]);