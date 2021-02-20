/*
Cano Ayelen
Ejercicio While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese su clave.");
	

	/*while(clave != "utn750"){

		alert("Error de contraseña");
		clave = prompt("ingrese su clave.");


	}*/

	
	do{	
		alert("Error de contraseña");
		clave = prompt("ingrese su clave.");

	}while(clave != "utn750"); 

	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
