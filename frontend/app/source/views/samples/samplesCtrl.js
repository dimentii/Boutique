'use strict';

angular.module('boutiqueControllers').controller('SamplesController', ['$scope', 'loader',
    function ($scope, loader) {
        var count = 1,
            from = 0;

        function clean() {
            $scope.packOne = [];
            $scope.packTwo = [];
        }

        function getMode(length) {
            switch(length) {
                case 1:
                    return 'one';
                case 2:
                    return 'two';
                case 3:
                    return 'three';
                case 4:
                    return 'four';
                case 5:
                    return 'five';
                case 6:
                    return 'six';
                case 7:
                    return 'seven';
                case 8:
                    return 'eight';
                default:
                    throw new Error('Unsupported number');
            }
        }

        function pack(samples) {
            clean();

            for(var i = 0; i < samples.length; i++) {
                i%2 === 0 ? $scope.packOne.push(samples[i]) : $scope.packTwo.push(samples[i]);
            }

            $scope.mode = getMode(samples.length);
        }

        $scope.mode = null;
        $scope.packOne = null;
        $scope.packTwo = null;

        $scope.next = function() {
            var start = from;
            from += count;
            var samples = loader.get(start, from);
            pack(samples);
        };

        $scope.previous = function() {
            var end = from;
            from -= count;
            var samples = loader.get(from, end);
            pack(samples);
        };

        $scope.$on('mode:changed', function(event, args) {
            from -= count;
            count = args.mode;
            $scope.next();
        });

        $scope.next();
    }
]);