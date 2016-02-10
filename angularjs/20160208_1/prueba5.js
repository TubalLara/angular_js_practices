var varApp5 = angular.module('miApp5',[]);

var funcController = function(){
	var vm=this;
	vm.resultado = 0;
	vm.incrementar  = function (){
		vm.resultado +=parseInt(vm.incremento);		
	};
	
	
}

varApp5.controller("Controller", funcController);