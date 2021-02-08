function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad>=18){

		alert("Es mayor de edad");
	}

	alert("Fin del programa");
	

}//FIN DE LA FUNCIÓN