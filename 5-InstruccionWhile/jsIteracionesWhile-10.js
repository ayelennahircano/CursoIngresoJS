/*
Cano Ayelen
Ejercicio While 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;//1
	let sumaPositivos;//2
	let cantPositivos;//3
	let cantNegativos;//4
	let cantCeros;//5
	let cantNumerosPares;//6
	let promedioPositivos;//7
	let promedioNegativos;//8
	let diferenciaPositivosNegativos;//9

	//iniciar variables
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantPositivos = 0;
	cantNegativos = 0;
	cantCeros = 0;
	cantNumerosPares = 0;
	respuesta="si";

	//inicio while
	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado==0){
			cantCeros++;//5
		}else{
			if(numeroIngresado>0){
				sumaPositivos=sumaPositivos+numeroIngresado;//2
				cantPositivos++;//3
			}else{
				if(numeroIngresado<0){
					sumaNegativos=sumaNegativos+numeroIngresado;//1
					cantNegativos++;//4
				}
			}
		}
		if(numeroIngresado%2==0){
			cantNumerosPares++;//6
		}
		
		respuesta=prompt("desea continuar? Ingrese si para continuar y no para mostrar");
	}
	//fin del while
	promedioPositivos=sumaPositivos/cantPositivos;//7
	promedioNegativos=sumaNegativos/cantNegativos;//8
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;//9

	document.write("La suma de negativos es: "+sumaNegativos+"</br>");//1
	document.write("La suma de positivos es: "+sumaPositivos+"</br>");//2
	document.write("La cantidad de positivos es: "+cantPositivos+"</br>");//3
	document.write("La cantidad de negativos es: "+cantNegativos+"</br>");//4
	document.write("La cantidad de ceros es: "+cantCeros+"</br>");//5
	document.write("La cantidad de números pares es: "+cantNumerosPares+"</br>");//6
	document.write("El promedio de los positivos es: "+promedioPositivos+"</br>");//7
	document.write("El promedio de los negativos es:  "+promedioNegativos+"</br>");//8
	document.write("La diferencia entre positivos y negativos es: "+diferenciaPositivosNegativos+"</br>"+"</br>"+"Reinicie la página para volver a intentar");//9
}//FIN DE LA FUNCIÓN