var varApp3 = angular.module('miApp3',[]);

var control = function($scope) {
	$scope.ver = true;
	$scope.nombre = "Tubal";
	$scope.editar = function () {
		
		if($scope.ver == false) {
			$scope.ver = true;
		} else {
			$scope.ver = false;
		}
	};
	$scope.guardar = function () {
		$scope.ver = true;
	};
	
};

varApp3.controller("controller3", control);