'use strict';

angular.module('boutiqueControllers').controller('SamplesController', ['$scope',
    function ($scope) {
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

        $scope.samples = samplesData;
    }
]);