/*
Cano Ayelen
Ejercicio While 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;

	sexo = prompt("ingrese f ó m.");

	//while(!(sexo=="f" || sexo=="m")) (sexo!="f" && sexo!="m")

	while(!(sexo=="f" || sexo=="m")){
		sexo = prompt("Incorrecto. ingrese f ó m.");
	}

	/*switch(sexo){
		case "f":
			document.getElementById("txtIdSexo").value="Su sexo es femenino";
			break;
		case "m":
			document.getElementById("txtIdSexo").value="Su sexo es masculino";
			break;
	}*/

	if(sexo=="f"){
		sexo = "femenino";
	}else{
		if(sexo=="m"){
			sexo = "masculino";
		}
	}

	document.getElementById("txtIdSexo").value="Su sexo es " + sexo;
	//document.getElementById("txtIdSexo").value=sexo;

	

}//FIN DE LA FUNCIÓN