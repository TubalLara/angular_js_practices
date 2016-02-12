var varStyles2 = angular.module('JSON2',[])

var control2 = function($scope) {
	
	$scope.elements=[
         {name:"Peras", price:20,type:"alimento"},
         {name:"Mesa", price:170,type:"mueble"},
         {name:"Chaqueta", price:70,type:"ropa"},
         {name:"Apple", price:20,type:"alimento"},
         {name:"Taburete", price:170,type:"mueble"},
         {name:"Falda", price:70,type:"ropa"},
         {name:"Fresas", price:20,type:"alimento"},
         {name:"Silla", price:170,type:"mueble"},
         {name:"Abrigo", price:70,type:"ropa"}
	];
	
	$scope.add=function(){
		$scope.elements.push({name:$scope.name, price:$scope.price,type:$scope.type});
		
		$scope.name="";
		$scope.price="";
		$scope.type="";
	};
	
	$scope.erase= function (index) {
		$scope.elements.splice(index,1);
	}
	
	
	
};

varStyles2.controller("controller",control2);