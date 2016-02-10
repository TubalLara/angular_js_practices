var varApp3 = angular.module('myApp3',[]);

var control=function(){
	var vm=this;
	vm.colors = [];
	vm.loadColor = function(){
		vm.colors.push(vm.color);
	}
};

varApp3.controller("controller",control);