/*
Ayelen Cano
Ejercicio W2ile 01

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let i = 0;//Contador. funciona como variable de control. Función de contador, cuentan vueltas, en una cantidad fija y constante, hay que incializarlos (siempre en 0) != a acumulador 

	//acumulador: inicializarlo, en 0, acumula en cantidad variable (ingresada por el usuario)


	while(i < 10){

		i=i+1; 
		console.log(i);
		alert("El número es: "+i);



	}

	alert("Fin de bucle");
}//FIN DE LA FUNCIÓN