'use strict';

angular.module('boutique').directive('ngDropzone', [function () {
    return {
        restrict: 'A',
        templateUrl: 'html/dropzone.html',
        scope: {
            files: '='
        },
        link: function link(scope, element) {
            function cancel(event){
                if(event.preventDefault){
                    event.preventDefault();
                }
                return false;
            }

            function drop(event) {
                cancel(event);

                var data = event.originalEvent.dataTransfer;

                var files = data.files;

                for(var i = 0; i < files.length; i++) {
                    readFile(files[i]);
                }
            }

            function readFile(file) {
                if(duplicate(file.name)) {
                    // todo[dd]: handle this
                    console.log('already exists in collection');
                    return;
                }

                var reader = new FileReader();

                $(reader).on('loadend', function() {
                    scope.files.push({file: file, src: this.result});
                    scope.$digest();
                });

                reader.readAsDataURL(file);
            }

            function duplicate(fileName) {
                for(var i = 0; i < scope.files.length; i++) {
                    if(scope.files[i].file.name === fileName){
                        return true;
                    }
                }

                return false;
            }

            var input = element.find('input[type="file"]').on('change', function(event) {
                var files = event.originalEvent.target.files;

                for(var i = 0; i < files.length; i++) {
                    readFile(files[i]);
                }

                input.replaceWith(input = input.clone(true));
            });

            if(!!FileReader && Modernizr.draganddrop) {
                element.on('dragover', cancel);
                element.on('dragenter', cancel);
                element.on('drop', function(event) {
                    drop(event);

                    return false;
                });
            }
            else {
                // todo[dd]: what to do here?
            }
        },
        controller: ['$scope', function($scope) {
            $scope.remove = function(name) {
                for(var i = 0; i < $scope.files.length; i++){
                    if($scope.files[i].file.name === name) {
                        $scope.files.splice(i, 1);
                        return;
                    }
                }
            }
        }]
    }
}]);