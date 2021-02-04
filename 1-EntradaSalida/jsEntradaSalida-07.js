/*
Cano Ayelén Nahir
Ejercicio ES 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var sumandoUno;
	var sumandoDos;
	var total;

	sumandoUno=document.getElementById('txtIdNumeroUno').value;
	sumandoDos=document.getElementById('txtIdNumeroDos').value;

	sumandoUno=parseInt(sumandoUno);
	sumandoDos=parseInt(sumandoDos);

	total=sumandoUno+sumandoDos;
	alert("La suma es "+total);
}

function restar()
{
	var minuendo;
	var sustraendo;
	var diferencia;

	minuendo=document.getElementById('txtIdNumeroUno').value;
	sustraendo=document.getElementById('txtIdNumeroDos').value;

	minuendo=parseInt(minuendo);
	sustraendo=parseInt(sustraendo);

	diferencia=minuendo-sustraendo;
	alert("La resta es "+diferencia);
	
}

function multiplicar()
{ 
	var multiplicando;
	var multiplicador;
	var producto;

	multiplicando=document.getElementById('txtIdNumeroUno').value;
	multiplicador=document.getElementById('txtIdNumeroDos').value;

	multiplicando=parseInt(multiplicando);
	multiplicador=parseInt(multiplicador);

	producto=multiplicando*multiplicador;
	alert("La multiplicación es "+producto);
	
}

function dividir()
{
	var dividendo;
	var divisor;
	var cociente;

	dividendo=document.getElementById('txtIdNumeroUno').value;
	divisor=document.getElementById('txtIdNumeroDos').value;

	cociente=dividendo/divisor;
	alert("La división es "+cociente);

	//NaN da por ej por ingresar una palabra, olvidar el value.. 
	//https://onlinegdb.com/Li0RNxsyx

}



