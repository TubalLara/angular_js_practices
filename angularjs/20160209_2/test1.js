var varApp1=angular.module('myApp1', []);

var control1 = function($scope, $rootScope){
	$scope.dato = "Popeye";
	$rootScope.datillo = "Cocoliso";
};
var control2 = function($scope){
	$scope.dato = "Olivia";
};
var control3 = function($scope){
	$scope.dato = "Brutus";
};

varApp1.controller("controller1",control1);
varApp1.controller("controller2",control2);
varApp1.controller("controller3",control3);