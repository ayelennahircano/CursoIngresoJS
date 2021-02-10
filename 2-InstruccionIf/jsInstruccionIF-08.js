/*
Cano Ayelen Nahir
Ejercicio if 08

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	if(edad<18 || estadoCivil!="Soltero"){

	}else if (edad>=18 && estadoCivil=="Soltero"){

		alert("Es soltero y no es menor");
	}

	alert("Fin del programa");
	


}//FIN DE LA FUNCIÓN