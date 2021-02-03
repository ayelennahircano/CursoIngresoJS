/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//forma para que sea soportada por todos los buscadores: nombreIngresado=document.getElementById('').value;
	//Error de id nombreIngresado=document.getElementById('txtidNombre').value;

	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("Su nombre es: "+ nombreIngresado);

}



//https://www.onlinegdb.com/fagGzl4eq