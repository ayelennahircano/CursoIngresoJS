function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad>=18){

		alert("Es mayor de edad");

	}else if(edad>=13 && edad<=17){

		alert("Es un adolescente");

	}else{

		alert("Es un niño");
	}

	alert("Fin del programa");


}//FIN DE LA FUNCIÓN