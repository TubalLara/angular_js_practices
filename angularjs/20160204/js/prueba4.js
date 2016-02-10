var nuevaApp3 = angular.module("miApp3", []);

nuevaApp3.controller("LoloController3", ['$scope',
		function (){
			this.dato="Brutus";
			this.metodo = function(){
				this.dato="Popeye";
			}
		}
]);