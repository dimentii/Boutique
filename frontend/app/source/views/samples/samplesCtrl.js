'use strict';

angular.module('boutiqueControllers').controller('SamplesController', ['$scope',
    function ($scope) {
        var count = 1,
            from = 0;

        var samplesData = [
            {
                name: 'Red',
                description: 'Red rectangle',
                file: 'images/samples/red.png'
            },
            {
                name: 'Green',
                description: 'Green rectangle',
                file: 'images/samples/green.png'
            },
            {
                name: 'Blue',
                description: 'Blue rectangle',
                file: 'images/samples/blue.png'
            },
            {
                name: 'Black',
                description: 'Black rectangle',
                file: 'images/samples/black.png'
            },
            {
                name: 'Turquoise',
                description: 'Turquoise rectangle',
                file: 'images/samples/turquoise.png'
            },
            {
                name: 'Brown',
                description: 'Brown rectangle',
                file: 'images/samples/brown.png'
            },
            {
                name: 'Rose',
                description: 'Rose rectangle',
                file: 'images/samples/rose.png'
            },
            {
                name: 'Grey',
                description: 'Grey rectangle',
                file: 'images/samples/grey.png'
            },
            {
                name: 'Orange',
                description: 'Orange rectangle',
                file: 'images/samples/orange.png'
            }
        ];

        function getNextSamples() {
            var start = from;
            from += count;
            return samplesData.slice(start, from);
        }

        function getSamples(number){
            var start = 0;
            from = number;
            return samplesData.slice(start, from);
        }

        function getClassNumber(length){
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

        $scope.selectors = [
            {
                count: 1,
                class: "one"
            },
            {
                count: 2,
                class: "two"
            },
            {
                count: 4,
                class: "four"
            },
            {
                count: 8,
                class: "eight"
            }
        ];

        $scope.samplesPartOne = [];
        $scope.samplesPartTwo = [];

        function createSamplesParts() {
            var samples = getNextSamples();

            for(var i = 0; i < samples.length; i++) {
                i%2 === 0 ? $scope.samplesPartOne.push(samples[i]) : $scope.samplesPartTwo.push(samples[i]);
            }

            $scope.number = getClassNumber(samples.length);
        }

        createSamplesParts();

        $scope.toggle = function(number) {
            var samples = getSamples(number);

            $scope.samplesPartOne = [];
            $scope.samplesPartTwo = [];

            for(var i = 0; i < samples.length; i++) {
                i%2 === 0 ? $scope.samplesPartOne.push(samples[i]) : $scope.samplesPartTwo.push(samples[i]);
            }

            $scope.number = getClassNumber(samples.length);
        }
    }
]);