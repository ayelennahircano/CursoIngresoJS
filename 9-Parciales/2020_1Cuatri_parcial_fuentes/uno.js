/*
Cano Ayelen

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    let contadorDeVueltas;
    let tipoIngresado;
    let precioIngresado;
    let cantidadIngresada;
    let marcaIngresada;
    let fabricanteIngresado;
    let flagPrimerAlcohol;
    let precioAlcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let marcaAlcoholMasBarato;
    let fabricanteAlcoholMasBarato;
    let contadorBarbijos;
    let contadorJabones;
    let contadorAlcoholes;
    let acumuladorBarbijos;
    let acumuladorJabones;
    let acumuladorAlcoholes;
    let tipoMasVendido;
    let promedio;

    contadorDeVueltas = 0;
	flagPrimerAlcohol = 0;
	cantidadIngresada = 0;
	precioAlcoholMasBarato = 0;
	cantidadAlcoholMasBarato = 0;
    contadorBarbijos = 0;
    contadorJabones = 0;
    contadorAlcoholes = 0;
    acumuladorBarbijos = 0;
    acumuladorAlcoholes = 0;
    acumuladorJabones = 0;
    promedio = 0;
    
    //for(contadorDeVueltas==0;contadorDeVueltas<5;contadorDeVueltas++)
    for(contadorDeVueltas = 0; contadorDeVueltas < 5; contadorDeVueltas++)
    {
        tipoIngresado=prompt("Ingrese tipo");
        while(isNaN(tipoIngresado)==false || (tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol"))
        {
            tipoIngresado=prompt("Error, ingrese tipo");
        }

        precioIngresado=prompt("Ingrese precio");
        precioIngresado=parseInt(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
        {
            precioIngresado=prompt("Error, ingrese nuevamente el precio");
            precioIngresado=parseInt(precioIngresado);
        }

        cantidadIngresada=prompt("Ingrese la cantidad de unidades");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
        {
            cantidadIngresada=prompt("Error, ingrese la cantidad de unidades");
            cantidadIngresada=parseInt(cantidadIngresada);
        }

        /*isNaN da true cuando lo de adentro no es un numero, si es numero da false; preguntar true pana numero y false para texto*/
        marcaIngresada=prompt("Ingrese marca");
        while(isNaN(marcaIngresada)==false)
        {
            marcaIngresada=prompt("Error, ingrese marca");
        }

        fabricanteIngresado=prompt("Ingrese fabricante");
        while(isNaN(fabricanteIngresado)==false)
        {
            fabricanteIngresado=prompt("Error, ingrese fabricante");
        }

        //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        if(tipoIngresado=="alcohol")
        {
            if(flagPrimerAlcohol==0)
            {
                precioAlcoholMasBarato=precioIngresado;
				cantidadAlcoholMasBarato=cantidadIngresada;
				marcaAlcoholMasBarato=marcaIngresada;
                fabricanteAlcoholMasBarato=fabricanteIngresado;
                flagPrimerAlcohol=1;
            }
            else
            {
                if(precioIngresado<precioAlcoholMasBarato)
                {
                    precioAlcoholMasBarato=precioIngresado;
                    cantidadAlcoholMasBarato=cantidadIngresada;
					marcaAlcoholMasBarato=marcaIngresada;
                    fabricanteAlcoholMasBarato=fabricanteIngresado;
                }
            }
        }

        //b) Del tipo con mas unidades, el promedio por compra
        switch(tipoIngresado)
        {
            case "alcohol":
                contadorAlcoholes++;
                acumuladorAlcoholes=acumuladorAlcoholes+cantidadIngresada;
                break;
            case "jabon":
                contadorJabones++;
                acumuladorJabones=acumuladorJabones+cantidadIngresada;
                break;
            case "barbijo":
                contadorBarbijos++;
                acumuladorBarbijos=acumuladorBarbijos+cantidadIngresada;
                break;
        }
    }

	if(acumuladorAlcoholes>acumuladorBarbijos && acumuladorAlcoholes>acumuladorJabones)
	{
		tipoMasVendido="alcohol";
		promedio=acumuladorAlcoholes/contadorAlcoholes;
	}else{
		if(acumuladorJabones>acumuladorAlcoholes && acumuladorJabones>acumuladorBarbijos)
		{
			tipoMasVendido="jabón";
			promedio=acumuladorJabones/contadorJabones;
		}else{
			if(acumuladorBarbijos>acumuladorAlcoholes && acumuladorBarbijos>acumuladorJabones)
			{
				tipoMasVendido="barbijo";
				promedio=acumuladorBarbijos/contadorBarbijos;
			}
		}
	}

    alert("El alcohol más barato es "+marcaAlcoholMasBarato+", su cantidad es unidades vendidas es "+cantidadAlcoholMasBarato+" y su fabricante es "+fabricanteAlcoholMasBarato);
    alert("El tipo de producto con más unidades es "+tipoMasVendido+" y su promedio por compra es "+promedio);
    alert("La cantidad total de jabones es "+acumuladorJabones);
}

