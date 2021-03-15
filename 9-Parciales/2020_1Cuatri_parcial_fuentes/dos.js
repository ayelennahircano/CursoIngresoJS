/*
Cano Ayelen

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let tipoDeBolsa;
  let cantidadDeBolsas;
  let precioDeBosas; 
  let bolsaArena;
  let bolsaCal;
  let bolsaCemento;
  let precioBolsaDeArena;
  let precioBolsaDeCal;
  let precioBolsaDeCemento;
  let cantidadDeBolsasArena;
  let cantidadDeBolsasCal;
  let cantidadDeBolsasCemento;
  let descuento;
  let respuesta;
  let precioSinDescuento;

  respuesta = "si;"
  precioDeBosas = 0;
  cantidadDeBolsas = 0;
  descuento = 0;
  cantidadDeBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;

  while(respuesta == "si")
  {

    tipoDeBolsa = prompt("Ingrese tipo (cal, cemento, arena");
    while(isNaN(tipoDeBolsa)==false || (tipoDeBolsa!="cal" && tipoDeBolsa!="cemento" && tipoDeBolsa!="arena"))
    {
        tipoDeBolsa = prompt("Error. Ingrese tipo (cal, cemento, arena");
    }

    cantidadDeBolsas = prompt("Ingrese cantidad de bolsas");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas)==true)
    {
        cantidadDeBolsas = prompt("Error. Ingrese cantidad de bolsas");
        cantidadDeBolsas=parseInt(cantidadDeBolsas);
    }

    precioDeBosas = prompt("Ingrese precio de la bolsa");
    precioDeBosas=parseFloat(precioDeBosas).toFixed(1);
    while(isNaN(precioDeBosas)==true || precioDeBosas<1)
    {
        precioDeBosas = prompt("Error. Ingrese precio de la bolsa");
        precioDeBosas=parseFloat(precioDeBosas).toFixed(1);
    }

    if(cantidadDeBolsas>10 && cantidadDeBolsas<31)
    {
        descuento = 15;
    }
    else
    {
        if(cantidadDeBolsas>30)
        {
            descuento = 25;
        }
    }

    switch(tipoDeBolsa)
    {
        case "cal":
            cantidadDeBolsasArena=cantidadDeBolsas;
            precioBolsaDeCal=precioDeBosas;
            break;
        case "arena":
            acumuladorBolsasArena=acumuladorBolsasArena+cantidadDeBolsas;
            precioBolsaDeArena=precioDeBosas;
            break;
        case "cemento":
            acumuladorBolsasCemento=acumuladorBolsasCemento+cantidadDeBolsas;
            precioBolsaDeCemento=precioDeBosas;
            break;
    }






    prompt("quiere seguir ingresando datos? Ingrese si o no")
    while(isNaN(respuesta) == false || (respuesta!="si" && respuesta!="no"))
    {
        prompt("Error. Quiere seguir ingresando datos? Ingrese si o no")
    }
    if(respuesta=="no")
    {
        break;
    }
  }

  precioSinDescuento=;
  if(descuento!=0)
  {
      alert()
  }
  
}
