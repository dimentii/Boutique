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
            }
        ];

        function getNextSamples() {
            var start = from;
            from += count;
            return samplesData.slice(start, from);
        }

        function getPrevSamples() {
            var to = from;
            from -= count;
            return samplesData.slice(from, to);
        }

        function getSamples(number){
            var start = 0;
            from = number;
            return samplesData.slice(start, from);
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
            }
        ];

        $scope.samples = getNextSamples();

        $scope.toggle = function(number){
            $scope.samples = getSamples(number);
        }
    }
]);