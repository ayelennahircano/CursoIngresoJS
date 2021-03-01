/*
Cano Ayelen
Ejercicio Switch 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
				alert("FRIO");
				break;
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN