/*
Cano Ayelen
Ejercicio for 08

al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{

	let i;
	let numeroIngresado;
	let contDivisores;

	i = 0;
	contDivisores = 0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true)
        {
			numeroIngresado=prompt("Error, Ingrese un número");
			numeroIngresado=parseInt(numeroIngresado);
        }

	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i===0)
		{
			contDivisores++;
		}
	}

	if(contDivisores != 0 || numeroIngresado < 2)
	{
		alert("El número "+numeroIngresado+" no es primo");
	}else{
		alert("El número "+numeroIngresado+" es primo")
	}

}//FIN DE LA FUNCIÓNN