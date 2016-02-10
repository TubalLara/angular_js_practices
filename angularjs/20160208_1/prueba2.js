var appVar2 = angular.module('miApp2', []);

var functionController2 = function seccionController () {
	
	this.nombre="Ronaldo";
	this.sueldo="900";
	
}
appVar2.controller("miController2", functionController2);
