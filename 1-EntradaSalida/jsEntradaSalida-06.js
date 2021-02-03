/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//alert(numeroUno);
	resultado=numeroUno+numeroDos;//con que una variable sea texto el + concatena
	alert("La suma es "+resultado);
}

