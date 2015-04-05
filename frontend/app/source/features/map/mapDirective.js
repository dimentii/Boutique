'use strict';

angular.module('boutique').directive('ngMap', [function() {
    return {
        restrict: 'A',
        templateUrl: 'html/map.html',
        link: function(scope, element){
            var center = new google.maps.LatLng(39.927973, -75.064813);
            var home = new google.maps.LatLng(39.928320, -75.068479);

            var mapOptions = {
                zoom: 17,
                panControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                center: center,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };

            scope.map = new google.maps.Map(element.children()[0], mapOptions);

            scope.home = new google.maps.Marker({
                position: home,
                map: scope.map,
                title: "Tatiana Scheurer"
            });
        }
    }
}]);