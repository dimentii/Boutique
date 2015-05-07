'use strict';

angular.module('boutique').directive('ngMode', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'A',
		require: 'ngNavbar',
		templateUrl: 'html/mode.html',
		replace: true,
		controller: ['$scope', function ($scope) {
			$scope.modes = [
				{name: 'One', number: 1},
				{name: 'Two', number: 2},
				{name: 'Four', number: 4},
				{name: 'Eight', number: 8}
			];

			$scope.toggle = function(mode){
				$rootScope.$broadcast('mode:changed', { mode: mode });
			}
		}]
	}
}]);