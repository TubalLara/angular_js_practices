var calc = angular.module('Calculadora',[]);

var funcCalculadora = function(){
	//prop dato1 , dato2
	this.suma = 0;
	this.resta = 0;
	
	this.sumar  = function (){
		this.suma=parseInt(this.dato1)+parseInt(this.dato2);		
	};
	this.restar  = function (){
		this.resta=parseInt(this.dato1)+parseInt(this.dato2);		
	};
	
}

calc.controller("calcController", funcCalculadora);
