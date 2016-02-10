var varApp4 = angular.module('miApp4', []);

varApp4.controller("control1", funcControl1);
varApp4.controller("control2", funcControl2);
varApp4.controller("control3", funcControl3);
varApp4.controller("control4", funcControl4);

var funcControl1 = function () {
	var vm = this;
	vm.nombre="Angelina";
}
var funcControl2 = function () {
	var vm = this;
	vm.nombre="Jolie";
}
var funcControl3 = function () {
	var vm = this;
	vm.nombre="Brad";
}
var funcControl4 = function () {
	var vm = this;
	vm.nombre="Pitt";
}