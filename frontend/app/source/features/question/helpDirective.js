'use strict';

angular.module('boutique').directive('ngHelp', [function() {
    return {
        restrict: 'A',
        templateUrl: 'html/help.html',
        controller: ['$scope', function($scope) {
            $scope.closeButton = "×";
            $scope.header = "Please use this form to:";

            $scope.usages = [
                "- ask your question",
                "- send me pictures with your ideas",
                "- know time and price of sewing your order"
            ];

            $scope.steps = [
                {class: "red", order: "①", description: "Fill the form"},
                {class: "blue", order: "②", description: "Add images"},
                {class: "green", order: "③", description: "Click Send"}
            ];

            $scope.show = true;

            $scope.close = function() {
                $scope.show = false;
            }
        }]
    }
}]);