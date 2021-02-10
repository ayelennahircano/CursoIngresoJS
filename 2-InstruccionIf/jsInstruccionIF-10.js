/*
Cano Ayelen Nahir
Ejercicio IF 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4e
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota=Math.floor(Math.random() * 10) + 1; 
	console.log(nota);

	if(nota<4){

		mensaje="Vamos, la próxima se puede";

	}else{

		if(nota>8){

			mensaje="EXCELENTE";

		}else{

			mensaje="APROBÓ";
		}
	}

	alert("Su nota es " + nota + ": " + mensaje + ".");


}//FIN DE LA FUNCIÓN


/*
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota=Math.floor(Math.random() * 10) + 1; 
	console.log(nota);

	if(nota>8){

		mensaje="EXCELENTE";


	}else{

		if(nota>3){

			mensaje="APROBÓ";

		}else{
			mensaje="Vamos, la próxima se puede";
		}
	}

	alert("Su nota es " + nota + ": " + mensaje + ".");

}
*/