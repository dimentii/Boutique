'use strict';

angular.module('boutiqueServices').factory('navigation', ['$rootScope', 'navigator',
    function ($rootScope, navigator) {
        function swipeUp() {
            $rootScope.$broadcast('direction:changed', { direction: navigator.swipeUpDirection });

            navigator.changeLocationUp();
        }

        function swipeDown() {
            $rootScope.$broadcast('direction:changed', { direction: navigator.swipeDownDirection });

            navigator.changeLocationDown();
        }

        function swipeLeft() {
            $rootScope.$broadcast('direction:changed', { direction: navigator.swipeLeftDirection });

            navigator.changeLocationLeft();
        }

        function swipeRight() {
            $rootScope.$broadcast('direction:changed', { direction: navigator.swipeRightDirection });

            navigator.changeLocationRight();
        }

        function scroll(direction) {
            $rootScope.$broadcast('direction:changed', { direction: direction });

            direction === navigator.swipeUpDirection ? navigator.changeLocationUp() : navigator.changeLocationDown();
        }

        function navigateTo(link) {
            navigator.changeLocationTo(link);
        }

        return {
            swipeUp: swipeUp,
            swipeDown: swipeDown,
            swipeLeft: swipeLeft,
            swipeRight: swipeRight,
            scroll: scroll,            
            navigateTo: navigateTo
        }
    }
]);