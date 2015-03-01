'use strict';

angular.module('boutiqueServices').factory('location', [
    function() {
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

        return {
            siteMap: siteMap,
            slidesMap: slidesMap,
            slidesMapPosition: slidesMapPosition,

            brandUrl: brandUrl,
            aboutUrl: aboutUrl,
            defaultSlidesUrl: defaultSlidesUrl
        }
    }
]);