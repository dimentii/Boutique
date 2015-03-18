'use strict';

angular.module('boutique').directive('ngQuestionDetails', ['$http', function ($http) {
    return {
        restrict: 'A',
        templateUrl: 'html/questiondetails.html',
        controller: ['$scope', function($scope) {
            $scope.files = [];

            $scope.send = function(data, details) {
                $http({
                    method: 'POST',
                    url: "/api/uploading",
                    //IMPORTANT!!! You might think this should be set to 'multipart/form-data'
                    // but this is not true because when we are sending up files the request
                    // needs to include a 'boundary' parameter which identifies the boundary
                    // name between parts in this multi-part request and setting the Content-type
                    // manually will not set this boundary parameter. For whatever reason,
                    // setting the Content-type to 'false' will force the request to automatically
                    // populate the headers properly including the boundary parameter.
                    headers: { 'Content-Type': undefined },
                    //This method will allow us to change how the data is sent up to the server
                    // for which we'll need to encapsulate the model data in 'FormData'
                    transformRequest: function (data) {
                        var formData = new FormData();
                        //need to convert our json object to a string version of json otherwise
                        // the browser will do a 'toString()' on the object which will result
                        // in the value '[Object object]' on the server.
                        formData.append("model", angular.toJson(data.model));
                        //now add all of the assigned files
                        for (var i = 0; i < data.files.length; i++) {
                            //add each file to the form data and iteratively name them
                            formData.append("file" + i, data.files[i]);
                        }
                        return formData;
                    },
                    //Create an object that contains the model and files which will be transformed
                    // in the above transformRequest method
                    data: { model: $scope.data, files: $scope.files }
                }).
                    success(function (data, status, headers, config) {
                        alert("success!");
                    }).
                    error(function (data, status, headers, config) {
                        alert("failed!");
                    });
            };
        }]
    }
}]);