/*
Cano Ayelen
Ejercicio for 06

al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let i;
	let numero;
	let contPares;

	i = 1;
	contPares = 0;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	while(isNaN(numero)==true)
        {
			numero=prompt("Error, Ingrese un numero");
			numero=parseInt(numero);
        }

	for(i=1;i<=numero;i++)
	{
		if(i%2==0)
		{
			contPares++;
			console.log(i);
		}
	}
	
	console.log("La cantidad de números pares encontrados es: "+contPares);

}//FIN DE LA FUNCIÓN