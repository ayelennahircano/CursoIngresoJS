/*
Cano Ayelen
Ejercicio for 05

al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let i;
	let numero; 

	i=0;

	for( ; ; )
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero==9)
		{
			break;
		}
		alert("Ingresó el número: "+numero);

	}
}//FIN DE LA FUNCIÓN