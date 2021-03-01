/*
Cano Ayelen
Ejercicio While 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	/*while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("desea continuar? (para agregar otro número ingrese: si)");
	}*/

	do{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("desea continuar? (para agregar otro número ingrese: si)");
	}while(respuesta=="si");

	document.getElementById('txtIdSuma').value="La suma acumulada es "+acumulador;
	document.getElementById('txtIdPromedio').value="El promedio es "+acumulador/contador;
}//FIN DE LA FUNCIÓN