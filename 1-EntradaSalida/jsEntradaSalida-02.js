/*
Cano Ayelén
Ejercicio ES 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//alert(nombreIngresado);//undefined es distinto de null y son distintos de vacio
	//alert(noExiste); error en tiempo de ejecución, variable que no existe, no está definida.
	nombreIngresado  = prompt("Ingrese su nombre");
	/*
	alert("nombreIngresado");
	alert(nombreIngresado);
	*/
	alert("Su nombre es: "+ nombreIngresado);

}


//https://www.onlinegdb.com/I3v2RIhmi