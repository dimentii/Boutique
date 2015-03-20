'use strict';

angular.module('boutique').directive('ngQuestionDetails', ['sendQuestion', function (sendQuestion) {
    return {
        restrict: 'A',
        templateUrl: 'html/questiondetails.html',
        controller: ['$scope', function($scope) {
            $scope.files = [];

            $scope.send = function(data, details) {
                if(details.$invalid){
                    return;
                }

                sendQuestion.send(data, $scope.files).then(
                    function(data, status){
                        console.log(status);
                        console.log(data);
                    },
                    function(data, status){
                        console.log(status);
                        console.log(data);
                    }
                );
            };
        }]
    }
}]);