var varStyles = angular.module('styles1',[])

var controller = function($scope) {
	
	$scope.leftInt = parseInt($scope.leftNumber);
	$scope.rightInt = parseInt($scope.rightNumber);
	
	$scope.loadChanges = function () {
		$scope.selection=[$scope.textSize, $scope.textColor];
	}
	
};

varStyles.controller("control",controller);