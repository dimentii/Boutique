'use strict';

angular.module('boutiqueServices').factory('navigation', ['navigator',
    function (navigator) {
        function swipeUp() {
            navigator.changeLocationUp();
        }

        function swipeDown() {
            navigator.changeLocationDown();
        }

        function swipeLeft() {
            navigator.changeLocationLeft();
        }

        function swipeRight() {
            navigator.changeLocationRight();
        }

        function scroll(direction) {
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