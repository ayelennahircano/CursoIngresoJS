/*
Cano Ayelén Nahir
Ejercicio ES 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;

	const aumento = 1.10;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	resultado = sueldo*aumento;
	resultado = parseInt(resultado);
	
	resultado = document.getElementById('txtIdResultado').value=resultado;

	//https://onlinegdb.com/HySDD_Yld
	
}

