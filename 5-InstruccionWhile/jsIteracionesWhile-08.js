/*
Cano Ayelen
Ejercicio While 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//let contador;
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;
	let flag;
	//contador=0; el concepto de contador no se usa en este caso, lo que aplica es usar un flag
	flag = 0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número positivo o negativo");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado> -1){
			sumaPositivos=sumaPositivos+numeroIngresado;
		}else{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			flag=1;
			//contador++;
		}
		respuesta=prompt("desea continuar? (para agregar otro número ingrese: si)");
	}
	/*if(contador==0){
				multiplicacionNegativos=multiplicacionNegativos*0;
			}*/

	document.getElementById('txtIdSuma').value="La suma de los positivos es: "+sumaPositivos;
	if(flag==0){
		multiplicacionNegativos=0;
	}
	document.getElementById('txtIdProducto').value="El producto de los negativos es: "+multiplicacionNegativos;
}//FIN DE LA FUNCIÓN