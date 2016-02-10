var varApp7 = angular.module('myApp7', []);


var control = function() {
	
	var vm = this;
	vm.checkAge = function () {
		vm.value = parseInt(vm.age);
	};
	
};

varApp7.controller("controller",control);