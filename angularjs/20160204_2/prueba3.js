var nuevaApp3 = angular.module("MiApp3", []);

nuevaApp3.controller("LoloController3", 
		function(){
			this.dato="Brutus";
			this.metodo= function(){
				this.dato="Popeye";
			}
		}
);