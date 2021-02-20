/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("Ingrese un número entre el 0 y el 9.");
	numero = parseInt(numero);

	while(numero<0 || numero>9){


		numero = prompt("Incorrecto. Ingrese un número entre el 0 y el 9.");

	}

	document.getElementById("txtIdNumero").value=numero;


	
}//FIN DE LA FUNCIÓN