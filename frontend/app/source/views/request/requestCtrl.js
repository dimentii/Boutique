'use strict';

angular.module('boutiqueControllers').controller('RequestController', ['$scope',
    function ($scope) {
        $scope.files = [];

        $scope.send = function(data, details) {

        };

        var element = angular.element('.dropzone');

        function cancel(event){
            if(event.preventDefault){
                event.preventDefault();
            }
            return false;
        }

        if(!!FileReader && Modernizr.draganddrop) {
            element.on('dragover', cancel);
            element.on('dragenter', cancel);
            element.on('drop', function(event){
                event = event || window.event;

                if(event.preventDefault){
                    event.preventDefault();
                }

                var data = event.originalEvent.dataTransfer;

                var files = data.files;

                $scope.files = files;

                return false;
            })
        }
    }
]);