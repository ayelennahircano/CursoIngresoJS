/*
Cano Ayelen
Ejercicio for 07

al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{

	let i;
	let numeroIngresado;
	let contDivisores;

	i = 1;
	contDivisores = 0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true)
        {
			numeroIngresado=prompt("Error, Ingrese un número");
			numeroIngresado=parseInt(numeroIngresado);
        }


	for(i=1;i<=numeroIngresado;i++)
	{
		if(numeroIngresado%i===0)
		{
			contDivisores++;
			console.log(i);
		}
	}

	console.log("La cantidad de números divisores encontrados es: "+contDivisores);


}//FIN DE LA FUNCIÓN