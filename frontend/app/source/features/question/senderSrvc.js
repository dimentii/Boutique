'use strict';

angular.module('boutiqueServices').factory('sender', ['$http', '$q',
    function($http, $q) {

        function send(data, files) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "/api/uploading",
                headers: {'Content-Type': undefined},
                transformRequest: function (data) {
                    var formData = new FormData();
                    formData.append("name", data.model.name);
                    formData.append("email", data.model.email);
                    formData.append("phone", data.model.phone);
                    formData.append("comments", data.model.comments);

                    for (var i = 0; i < data.files.length; i++) {
                        formData.append("file" + i, data.files[i].file);
                    }
                    return formData;
                },
                data: {model: data, files: files}
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(status);
            });

            return deferred;
        }

        return {
            send: send
        }
    }
]);
