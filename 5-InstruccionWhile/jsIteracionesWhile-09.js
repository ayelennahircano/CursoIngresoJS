/*
Cano Ayelen
Ejercicio While 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	numeroMaximo=0;
	numeroMinimo=0;
	banderaDelPrimero=true;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero==true){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=false;
		}
		if(numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo){
			numeroMinimo=numeroIngresado;
		}
		/*
		if(banderaDelPrimero==true || numeroIngresado<numeroMinimo){
			numeroMinimo=numeroIngresado;
		}
		if(banderaDelPrimero==true || numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=false;
		}
		*/	
		respuesta=prompt("desea continuar? Para continuar ingrese: si");
	}
	document.getElementById('txtIdMaximo').value="El máximo es: "+numeroMaximo;
	document.getElementById('txtIdMinimo').value="El mínimo es: "+numeroMinimo;
}//FIN DE LA FUNCIÓN