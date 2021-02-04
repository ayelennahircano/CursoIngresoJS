/*
Cano Ayelén Nahir
Ejercicio ES 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	const descuento = 0.75;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	resultado = importe*descuento;
	resultado = parseInt(resultado);

	resultado = document.getElementById('txtIdResultado').value=resultado;

	//https://onlinegdb.com/ryi4A_Fgd

}


