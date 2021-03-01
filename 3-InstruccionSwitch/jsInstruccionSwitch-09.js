/*
Cano Ayelen
Ejercicio Switch 09

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento.
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let aumento;
	let descuento;
	let precioBasico;
	let precioFinal;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado =document.getElementById("txtIdDestino").value;
	precioBasico = 15000;
	aumento = 0;
	descuento = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 10;
					break;
				case "Cataratas":
					aumento = 10;
					break;
				case "Cordoba":
					precioFinal = precioBasico;
					break;
				case "Mar del plata":
					aumento = 10;
					break;
			}
			break;			
	}
	
	if(aumento!=0)
	{
		precioFinal = precioBasico + (aumento*precioBasico/100);
	}
	else
	{
		if(descuento!=0)
		{
			precioFinal = precioBasico - (descuento*precioBasico/100);
		}
	} 
	precioFinal = parseInt(precioFinal);
	alert("El precio final: $"+precioFinal);

	/*
	Ejemplo del vídeo:

	let estacionIngresada;
	let destinoIngresado;
	let aumento;
	let descuento;
	let precioBasico;
	let precioFinal;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado =document.getElementById("txtIdDestino").value;
	precioBasico = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
				descuento = 10;
				}
				else
				{
					if(destinoIngresado == "Mar del plata")
					{
						descuento = 20;
					}
				}
			}
			break;

		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
				aumento = 10;
				}
				else
				{
					if(destinoIngresado == "Mar del plata")
					{
						aumento = 20;
					}
				}
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destinoIngresado == "Bariloche")
			{
				aumento = 10;
			}
			else
			{
				if(destinoIngresado == "Cataratas")
				{
				aumento = 10;
				}
				else
				{
					if(destinoIngresado == "Mar del plata")
					{
						aumento = 10;
					}
					else
					{
						if(destinoIngresado == "Cordoba")
						{
							precioFinal = precioBasico;
						}
					}
				}
			}
			break;			
	}

	if(aumento!=0)
	{
		precioFinal = precioBasico + (aumento*precioBasico/100);
	}
	else if(descuento!=0)
	{
		precioFinal = precioBasico - (descuento*precioBasico/100);
	}
	precioFinal = parseInt(precioFinal);
	alert("El precio final: $"+precioFinal);
	*/
}//FIN DE LA FUNCIÓN

