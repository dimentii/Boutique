'use strict';

angular.module('boutiqueServices').factory('navigator', ['$rootScope', '$location', 'mapping',
    function($rootScope, $location, mapping) {
        var swipeUpDirection = 'swipe-up';
        var swipeDownDirection = 'swipe-down';
        var swipeLeftDirection = 'swipe-left';
        var swipeRightDirection = 'swipe-right';

        function changeLocationUp() {
            var currentLocation = $location.path();
            var upperLink = mapping.getUpperLink(currentLocation);
            if(upperLink !== '') {
                $rootScope.$broadcast('direction:changed', { direction: swipeUpDirection });
                $location.url(upperLink);
            }
        }

        function changeLocationDown() {
            var currentLocation = $location.path();
            var downLink = mapping.getDownLink(currentLocation);
            if(downLink !== '') {
                $rootScope.$broadcast('direction:changed', { direction: swipeDownDirection });
                $location.url(downLink);
            }
        }

        function changeLocationLeft() {
            $rootScope.$broadcast('direction:changed', { direction: swipeLeftDirection });

            var currentLocation = $location.path();
            var leftUrl = mapping.getLeftLink(currentLocation);
            $location.url(leftUrl);
        }

        function changeLocationRight() {
            $rootScope.$broadcast('direction:changed', { direction: swipeRightDirection });

            var currentLocation = $location.path();
            var rightUrl = mapping.getRightLink(currentLocation);
            $location.url(rightUrl);
        }

        function changeLocationTo(link) {
            var currentLink = $location.path();
            if(currentLink === link){
                return;
            }

            var direction = mapping.isMovingUp(currentLink, link) ? swipeDownDirection : swipeUpDirection;

            $rootScope.$broadcast('direction:changed', { direction: direction });

            $location.url(link);
        }

        return {
            swipeUpDirection: swipeUpDirection,
            swipeDownDirection: swipeDownDirection,
            swipeLeftDirection: swipeLeftDirection,
            swipeRightDirection: swipeRightDirection,

            changeLocationUp: changeLocationUp,
            changeLocationDown: changeLocationDown,
            changeLocationLeft: changeLocationLeft,
            changeLocationRight: changeLocationRight,

            changeLocationTo: changeLocationTo
        }
    }
]);