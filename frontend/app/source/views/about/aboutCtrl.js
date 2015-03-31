'use strict';

angular.module('boutiqueControllers').controller('AboutController', ['$scope',
    function ($scope) {
        $scope.about = {
            first: 'I have an experience in tailoring for over thirty years and I truly love my job.',
            second: 'Do you want a luxurious dress, family look or clothing of your own design? No problem! Together we can open new horizons for your most daring ideas and solutions.'
        };
        $scope.sign = 'Tatiana Scheurer.';
    }
]);