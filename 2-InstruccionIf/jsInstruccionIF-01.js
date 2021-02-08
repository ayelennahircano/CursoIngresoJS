function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad == 15){

		alert("Niña bonita");
	}

	alert("Esto se muestra después del if");

}//FIN DE LA FUNCIÓN