/*
Cano Ayelen

Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.l
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let flagPrimeraPersona;
	let flagPrimeraTemperatura;
	let personaConMasTemperatura;
	let mayorTemperatura;
	let contViudos;
	let contHombresViudosSolteros;
	let contMayoresConAltaTemperatura;
	let acumEdadHombresSolteros;
	let promedioEdadHombresSolteros;


	respuesta="si";
	flagPrimeraPersona = 0;
	flagPrimeraTemperatura = 0;
	contViudos = 0;
	contHombresViudosSolteros = 0;
	contMayoresConAltaTemperatura = 0;
	contHombresSolteros = 0;
	acumEdadHombresSolteros = 0;
	promedioEdadHombresSolteros = 0;

	while(respuesta=="si")
	{	
		nombre=prompt("Ingrese nombre");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error. Ingrese nombre");
        }

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
        while(isNaN(edad)==true)
        {
            edad=prompt("Error. Ingrese edad");
			edad=parseInt(edad);
        }

		sexo=prompt("Ingrese sexo: f o m");
        while(isNaN(sexo)==false || (sexo!="m" && sexo!="f"))
        {
            sexo=prompt("Error. Ingrese sexo: f o m");
        }

		estadoCivil=prompt("Ingrese estado civil: soltero, casado o viudo");
        while(isNaN(estadoCivil)==false || (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"))
        {
            estadoCivil=prompt("Ingrese estado civil: soltero, casado o viudo");
        }

		temperaturaCorporal=prompt("Ingrese la temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
        while(isNaN(temperaturaCorporal)==true)
        {
            temperaturaCorporal=prompt("Error. Ingrese la temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
        }
		//a
		if(flagPrimeraPersona==0)
        {
            if(flagPrimeraTemperatura==0)
            {
                mayorTemperatura=temperaturaCorporal;
				personaConMasTemperatura=nombre;
                flagPrimeraTemperatura=1;
            }
            else
            {
                if(temperaturaCorporal>mayorTemperatura)
                {
					mayorTemperatura=temperaturaCorporal;
					personaConMasTemperatura=nombre;
                }
            }
			flagPrimeraPersona=1;
		}else
		{
			if(flagPrimeraTemperatura==0)
			{
				mayorTemperatura=temperaturaCorporal;
				personaConMasTemperatura=nombre;
				flagPrimeraTemperatura=1;
			}
			else
			{
				if(temperaturaCorporal>mayorTemperatura)
				{
					mayorTemperatura=temperaturaCorporal;
					personaConMasTemperatura=nombre;
				}
			}
		}
		//b
		if(edad>17)
		{
			if(estadoCivil=="viudo")
			{
				contViudos++;
			}
		}
		//c
		if(sexo=="m"){
			if(estadoCivil=="viudo" || estadoCivil=="soltero")
			{
				contHombresViudosSolteros++;
			}
		}
		//d
		if(edad>59)
		{
			if(temperaturaCorporal>38){
				contMayoresConAltaTemperatura++;
			}
		}
		//e
		if(sexo=="m" && estadoCivil=="soltero")
		{
			contHombresSolteros++;
			acumEdadHombresSolteros=acumEdadHombresSolteros+edad;
		}

		respuesta=prompt("Desea ingresar más datos? Ingrese si o no");
		while(isNaN(respuesta)==false || (respuesta!="no" && respuesta!="si"))
        {
            respuesta=prompt("Error. Desea ingresar más datos? Ingrese si o no");
        }
		if(respuesta=="no")
		{
			break;
		}

	}

	promedioEdadHombresSolteros = acumEdadHombresSolteros/contHombresSolteros;

	alert("La persona con mayor temperatura es: "+personaConMasTemperatura);//a
	alert("La cantidad de mayores de edad viudos es: "+contViudos);//b
	alert("La cantidad de Hombres solteros o viudos es: "+contHombresViudosSolteros);//c
	alert("La cantidad de personas de la tercera edad con temperaturas mayores a 38 es: "+contMayoresConAltaTemperatura);//d
	alert("El promedio de edad de los hombres solteros es: "+promedioEdadHombresSolteros);//e

}
