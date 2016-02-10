/* var appVar1 = angular.module('miApp1', []);
appVar1.controller("miController1", seccionController);

function seccionController () {
	
	this.lolo="Me llamo Popeye";
	
}
*/


/////////////////////// lo mismo pero metiendo la función en una  
//variable para su llamada


var appVar1 = angular.module('miApp1', []);

var functionController = function seccionController () {
	
	this.lolo="Me llamo Bond";
	
}
appVar1.controller("miController1", functionController);
