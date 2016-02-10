var varApp4 = angular.module('myApp4',[]);

var control=function(){
	var vm=this;
	vm.soldiers = [
	   {name:"Mickey", destiny:"Barcelona"},
	   {name:"Minie", destiny:"Madrid"},
	   {name:"Donald", destiny:"Irak"},
	   {name:"Daysie", destiny:"Paris"}
	];
	
};

varApp4.controller("controller",control);