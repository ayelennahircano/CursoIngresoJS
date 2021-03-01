/*
Cano Ayelen
Ejercicio for 03

al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA".
*/
function mostrar()
{
	let i;
	let repeticiones = prompt("ingrese el número de repeticiones");

	i=0;
	repeticiones = parseInt(repeticiones);
	
	for(i=0;i<repeticiones;i++){
		document.write("Hola UTN FRA"+"</br>");
	}


}//FIN DE LA FUNCIÓN