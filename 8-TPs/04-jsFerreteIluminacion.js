/*
Cano Ayelen Nahir
TP 04 Ferrete Iluminacion

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas;
    var descuento;
    var marcaLamparas;
    var precioDescuento;
    var impuesto;
    var ingresosBrutos;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    marcaLamparas=document.getElementById('Marca').value;

    cantidadLamparas=parseInt(cantidadLamparas);
    precioLamparas = cantidadLamparas * 35;
    precioLamparas=parseFloat(precioLamparas).toFixed(1);

    //if de cantidad con switch de marca
    if(cantidadLamparas>5)
    {
        descuento = 50;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
            }
        }
        else
        {
            if(cantidadLamparas==4)
            {
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparas==3){
                    switch(marcaLamparas)
                    {
                        case "ArgentinaLuz":
                            descuento = 15;
                            break;
                        case "FelipeLamparas":
                            descuento = 10;
                            break;
                        default:
                            descuento = 5;
                    }
                }
                else
                {
                    descuento = 0;
                }
            }
        }
    }
    //Switch de cantidad con if de marca
    /*switch(cantidadLamparas)
    {
        case 5:
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        case 4:
            if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case 3:
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(marcaLamparas=="FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
            break;
        case 2:
        case 1:
        case 0:
            descuento = 0;
            break;
        default:
            descuento = 50;
    }*/
    //todo switch
    /*switch(cantidadLamparas)
    {
        case 5:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
            }
            break;
        case 4:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
            }
            break;
        case 3:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
            break;
        case 2:
        case 1:
        case 0:
            descuento = 0;
            break;
        default:
            descuento = 50;
    }*/
    //todo if
    /*if(cantidadLamparas>5){
        descuento = 50;
    }else{
        if(cantidadLamparas==5){
            if(marcaLamparas=="ArgentinaLuz"){
                descuento = 40;
            }else{
                descuento = 30;
            }
        }else{
            if(cantidadLamparas==4){
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
                    descuento = 25;
                }else{
                    descuento = 20;
                }
            }else{
                if(cantidadLamparas==3){
                    if(marcaLamparas=="ArgentinaLuz"){
                        descuento = 15;
                    }else{
                        if(marcaLamparas=="FelipeLamparas"){
                            descuento = 10;
                        }else{
                            descuento = 5;
                        }
                    }
                }else{
                    descuento = 0;
                }
            }
            }
        }*/
    precioDescuento = precioLamparas - (precioLamparas * descuento/100);
    if(precioDescuento>120){
        impuesto = 10;
        ingresosBrutos = precioDescuento/impuesto;
        precioDescuento = precioDescuento + ingresosBrutos;
        alert("Usted pago $" + ingresosBrutos + " de IIBB.");
    }
    precioDescuento=parseFloat(precioDescuento).toFixed(1);
    precioDescuento=document.getElementById('txtIdprecioDescuento').value="$"+precioDescuento;
}
