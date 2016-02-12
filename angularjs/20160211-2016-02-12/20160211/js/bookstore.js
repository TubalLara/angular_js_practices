var varApp4 = angular.module('miApp4',[]);

var control = function() {
	var vm = this;
	vm.ver = false;
	vm.verEditar = false;
	vm.items = [
	{ISBN:"1234", Titulo:"Moby Dick", Precio:45, Cantidad:9 },
	{ISBN:"2754", Titulo:"El Quijote", Precio:34, Cantidad:2 },
	{ISBN:"2398", Titulo:"Mary Poppins", Precio:21, Cantidad:11 }	            
	];
	
	
	vm.verformu = function() {vm.ver=!vm.ver;};
	
	vm.insertar=function(){
		vm.items.push({ISBN:vm.ISBN, Titulo:vm.Titulo,Precio:vm.Precio,Cantidad:vm.Cantidad});
		
		vm.ISBN="";
		vm.Titulo="";
		vm.Precio="";
		vm.Cantidad="";
	};
	
	vm.eliminar= function (index) {
		vm.items.splice(index,1);
	};
	
	vm.editar = function (index) {
		
		if(vm.verEditar == false) {
			vm.verEditar = true;
		} else {
			vm.verEditar = false;
		}
	};
	
	/*vm.guardar = function () {
		vm.ver = true;
	};*/
	
};

varApp4.controller("controller4", control);