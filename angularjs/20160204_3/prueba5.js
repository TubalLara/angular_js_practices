/**
 * 
 */


angular.module("MiApp5", []).controller("LoloController5", 
		function(){
			this.dato="Brad Pitt";
			this.metodo=function(){
				this.dato="george Clooney";
			}
		}
);

/*opción2:
angular.module("MiApp5", []).controller("LoloController", pepito);

function pepito(){
}*/