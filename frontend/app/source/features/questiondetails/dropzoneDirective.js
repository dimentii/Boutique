'use strict';

angular.module('boutique').directive('ngDropzone', [function () {
    return {
        restrict: 'A',
        templateUrl: 'html/dropzone.html',
        scope: {
            files: '='
        },
        link: function link(scope, element) {
            var input = element.find('input[type="file"]');

            input.bind('change', function(event) {
                event = event || window.event;
                var files = event.originalEvent.target.files;

                for(var i = 0; i < files.length; i++) {
                    var file = files[i];

                    readFileData(file);
                }

                input.replaceWith(input = input.clone(true));
            });

            function cancel(event){
                if(event.preventDefault){
                    event.preventDefault();
                }
                return false;
            }

            function readFileData(file) {
                var reader = new FileReader();

                $(reader).on('loadend', function() {
                    buildPreview.apply(this, [file]);
                });

                reader.readAsDataURL(file);
            }

            function buildPreview(file) {
                if(checkForDuplicates(file.name)) {
                    console.log('already exists in collection');
                    return;
                }
                scope.files.push({name: file.name, src: this.result});
                scope.$digest();
            }

            function checkForDuplicates(fileName) {
                var exist = false;
                $.each(scope.files, function(index, el){
                    if(el.name === fileName){
                        exist = true;
                        return false;
                    }
                });
                return exist;
            }

            if(!!FileReader && Modernizr.draganddrop) {
                element.on('dragover', cancel);
                element.on('dragenter', cancel);
                element.on('drop', function(event) {
                    event = event || window.event;

                    if(event.preventDefault) {
                        event.preventDefault();
                    }

                    var data = event.originalEvent.dataTransfer;

                    var files = data.files;

                    for(var i = 0; i < files.length; i++) {
                        var file = files[i];

                        readFileData(file);
                    }

                    return false;
                })
            }
            else {
                // todo[dd]: what to do there?
            }
        },
        controller: ['$scope', function($scope) {
            $scope.remove = function(name) {
                var index = -1;
                for(var i = 0; i < $scope.files.length; i++){
                    if($scope.files[i].name === name) {
                        index = i;
                        break;
                    }
                }
                if(index < 0) {
                    return;
                }
                $scope.files.splice(index, 1);
            }
        }]
    }
}]);