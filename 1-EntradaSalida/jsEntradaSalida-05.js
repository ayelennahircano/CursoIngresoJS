/*
Cano Ayelén
Ejercicio ES 5
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;

	apellido = prompt("Ingrese su apellido", "Martinez");

	alert(apellido+", usted se llama "+nombre+" y tiene "+edad+" años");
}

/*

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

function mostrar()
{	
	var nombre;
	var edad;
	
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;

	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}


*/

//enunciado bis https://www.onlinegdb.com/g-8r7gMWM

//mios: https://www.onlinegdb.com/fdPHcHpM6 y https://onlinegdb.com/HJMwdXue_