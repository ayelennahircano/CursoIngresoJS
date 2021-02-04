/*
Cano Ayelén Nahir
TP 01 - Ferrete Facturacion

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert("La suma de los precios es $"+suma);

    //https://onlinegdb.com/6SCgJPjVPr

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaPrecios;
    var promedio;

    const cant = 3;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaPrecios = precioUno + precioDos + precioTres;
    promedio = sumaPrecios / cant;
    promedio = promedio.toFixed(2);

    alert("El promedio de los precios es $"+promedio);

    //https://onlinegdb.com/kad1Y_JF3

}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var precioFinal;

    const IVA = 1.21;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;
    precioFinal = suma*IVA;
    precioFinal = precioFinal.toFixed(2);

    alert("El precio final es $"+precioFinal);

    //https://onlinegdb.com/r1zXKOtld
}