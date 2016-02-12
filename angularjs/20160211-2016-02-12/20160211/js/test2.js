var varApp2 = angular.module('miApp2', []);



var control = function($scope) {
	$scope.result = function (valor) {
		if ((parseInt(valor)%2)==0) {
			return true;
		} else {
			return false;
		}
	};
};

varApp2.controller("controller", control);