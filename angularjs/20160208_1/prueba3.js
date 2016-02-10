var varApp3 =angular.module('miApp3', []);

////funcion constructor del primer controller
var funcControl1 = function() {
	var vm =this;
	vm.nombre="Me llamo Tubal";
}
///

varApp3.controller("Controlador1", funcControl1)

////funcion constructor del segundo controller
var funcControl2 = function() {
	var vm =this;
	vm.provincia="Madrid"
}
///

varApp3.controller("Controlador2", funcControl2)

////funcion constructor del tercer controller
var funcControl3 = function() {
	var vm =this;
	vm.sueldo=900000;
}
///

varApp3.controller("Controlador3", funcControl3)