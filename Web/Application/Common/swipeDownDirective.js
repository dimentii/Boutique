'use strict';

boutique.directive('ngSwipeDown', ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum horizontal delta for a swipe should be less than 75px.
    var MAX_HORIZONTAL_DISTANCE = 75;
    // Horizontal distance should not be more than a fraction of the vertical distance.
    var MAX_HORIZONTAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_VERTICAL_DISTANCE = 30;

    return {
        restrict: 'A',
        require: 'ngSection',
        link: function(scope, element, attr) {
            var swipeHandler = $parse(attr['ngSwipeDown']);

            var startCoords, valid;

            function validSwipe(coords) {
                // Check that it's within the coordinates.
                // Absolute horizontal distance must be within tolerances.
                // Vertical distance, we take the current Y - the starting Y.
                // This is negative for upward swipes and positive for downward swipes.
                // After multiplying by the direction (-1 for up, +1 for down), legal swipes
                // (ie. same direction as the directive wants) will have a positive delta and
                // illegal ones a negative delta.
                // Therefore this delta must be positive, and larger than the minimum.
                if (!startCoords) return false;
                var deltaX = Math.abs(coords.x - startCoords.x);
                var deltaY = (coords.y - startCoords.y);
                return valid && // Short circuit for already-invalidated swipes.
                    deltaX < MAX_HORIZONTAL_DISTANCE &&
                    deltaY > 0 &&
                    deltaY > MIN_VERTICAL_DISTANCE &&
                    deltaX / deltaY < MAX_HORIZONTAL_RATIO;
            }

            var pointerTypes = ['touch'];
            if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
                pointerTypes.push('mouse');
            }
            $swipe.bind(element, {
                'start': function(coords, event) {
                    startCoords = coords;
                    valid = true;
                },
                'cancel': function(event) {
                    valid = false;
                },
                'end': function(coords, event) {
                    if (validSwipe(coords)) {
                        scope.$apply(function() {
                            element.triggerHandler('swipedown');
                            swipeHandler(scope, { $event: event });
                        });
                    }
                }
            }, pointerTypes);
        }
    };
}]);