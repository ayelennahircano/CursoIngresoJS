/*
Cano Ayelen
Ejercicio While 06

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let promedio;

	while(contador<5){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador=acumulador+numeroIngresado;
	}

	promedio = acumulador/5; 
	document.getElementById('txtIdSuma').value="La suma acumulada es "+acumulador;
	document.getElementById('txtIdPromedio').value="El promedio es "+promedio;

	
	
	/*txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/
}//FIN DE LA FUNCIÓN