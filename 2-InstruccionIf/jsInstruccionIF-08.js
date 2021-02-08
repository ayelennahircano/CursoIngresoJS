function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad<18 || estadoCivil!="Soltero"){

	}else if (edad>=18 && estadoCivil=="Soltero"){

		alert("Es soltero y no es menor");
	}

	alert("Fin del programa");
	


}//FIN DE LA FUNCIÓN