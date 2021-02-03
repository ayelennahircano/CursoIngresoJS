/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreNuevo;
	
	//toma dato por id nombreIngresado=document.getElementById('txtIdNombre').value;

	//toma dato por prompt:
	nombreNuevo=prompt("Ingrese nombre");

	document.getElementById('txtIdNombre').value="Su nombre es: "+nombreNuevo+" , bienvenido/a!"; //muestra dato
}

/*
entrada:

nombreIngresado=document.getElementById('txtIdNombre').value;
nombreIngresado=prompt("Ingrese nombre");

salida:

document.getElementById('txtIdNombre').value=""+nombreIngresado;
alert(""+ nombreIngresado);

*/

//https://www.onlinegdb.com/uyqqBpSgco

