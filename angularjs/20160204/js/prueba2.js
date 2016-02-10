var nuevaApp2=angular.module("miApp2", []);

nuevaApp2.controller("loloController", controladorPrincipal);

function controladorPrincipal($scope){
	$scope.alumno={
			nombre:"Olivia"
	}
}