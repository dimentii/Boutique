'use strict';

angular.module('boutiqueControllers').controller('SamplesController', ['$scope', 'loader',
    function ($scope, loader) {
        var count = 1,
            current = 0,
            modes = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight' };

        function pack(samples) {
            var length = samples.length,
                middle = Math.ceil(length/2);

            $scope.packOne = samples.splice(0, middle);
            $scope.packTwo = samples;

            $scope.mode = modes[length];
        }

        function initialize(from, to) {
            var samples = loader.get(from, to);
            pack(samples);
        }

        $scope.mode = null;
        $scope.packOne = null;
        $scope.packTwo = null;

        $scope.next = function() {
            current += count;
            var end = current + count;
            initialize(current, end);
        };

        $scope.previous = function() {
            var end = current;
            current -= count;
            initialize(current, end);
        };

        $scope.$on('mode:changed', function(event, args) {
            count = args.mode;
            current -= count;
            $scope.next();
        });

        initialize(current, count);
    }
]);