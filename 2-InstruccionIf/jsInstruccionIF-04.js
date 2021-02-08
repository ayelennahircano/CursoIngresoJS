function mostrar()
{
	//tomo la edad 
	var edad;
	
	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad>=13 && edad<=17){

		alert("Es adolescente");
	}

	alert("Fin del programa");


}//FIN DE LA FUNCIÓN