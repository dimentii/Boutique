'use strict';

angular.module('boutiqueServices').factory('loader', [
    function() {
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

        function get(from, to) {

            return samplesData.slice(from, to);
        }

        return {
            get: get
        }
    }
]);