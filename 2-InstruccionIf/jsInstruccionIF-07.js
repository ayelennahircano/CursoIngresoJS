/*
Cano Ayelen Nahir
Ejercicio if 08

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	if(edad<18 && estadoCivil!="Soltero"){

		alert("Es muy pequeño para NO ser soltero");
	}

	/*o:
	if(edad<18){

		if(estadoCivil!="Soltero"){
			
			alert("Es muy pequeño para NO ser soltero");
		}
	}
	
	
	
	*/

	alert("Fin del programa");

}//FIN DE LA FUNCIÓN