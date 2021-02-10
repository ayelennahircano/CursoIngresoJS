function mostrar()
{
	//tomo la edad  
	var edad;
	var mensaje; //reduccion de software

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad>=18){

		mensaje="mayor";

	}else{
		
		if(edad>=13 && edad<=17){

			mensaje="adolescente";

		}else{

			mensaje="niño";

		}
	}

	alert("Usted es: " + mensaje);

	/*if(edad>=18){

		alert("Es mayor de edad");

	}else{
		
		if(edad>=13 && edad<=17){

		alert("Es un adolescente");

		}else{

		alert("Es un niño");

		}
	}*/

	/*
	Usa más microprocesador usar else if
	
	if(edad>=18){

		alert("Es mayor de edad");

	}else if(edad>=13 && edad<=17){

		alert("Es un adolescente");

	}else{

		alert("Es un niño");
	}*/

	alert("Fin del programa");


}//FIN DE LA FUNCIÓN