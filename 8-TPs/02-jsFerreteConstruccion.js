/*
Cano Ayelén Nahir
TP 02 - Ferrete Construcción.
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    //var cantHilos;
    var perimetro;
    var total;

    const cantHilos = 3; /*pasar a comentario y descomentar los comentarios para que el usuario pueda ingresar su propia cantidad de hilos.*/

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    //cantHilos = prompt("Ingrese la cantidas de hilos");

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    //cantHilos = parseInt(cantHilos);

    perimetro = (largo + ancho) * 2;
    total = perimetro * cantHilos;
    total = total.toFixed(2);

    alert("La cantidad de alambre a comprar es de "+total+" metros");

}
function Circulo () 
{
    var radio;
    //var cantHilos;
    var perimetro;
    var total;

    const PI = 3.14;
    const cantHilos = 3;/* pasar a comentario y descomentar los comentarios para que el usuario pueda ingresar su propia cantidad de hilos.*/

    radio = document.getElementById('txtIdRadio').value;

    //cantHilos = prompt("Ingrese la cantidas de hilos");

    radio = parseFloat(radio);
    //cantHilos = parseInt(cantHilos);

    perimetro = PI * radio * 2;
    total = perimetro * cantHilos;
    total = total.toFixed(2);

    alert("La cantidad de alambre a comprar es de "+total+" metros");
    



}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var totalCemento;
    var totalCal;

    const metroCemento = 2;
    const metroCal = 3;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;
    totalCemento = area * metroCemento;
    totalCal = area * metroCal;
    totalCemento = totalCemento.toFixed(2);
    totalCal = totalCal.toFixed(2);

    alert("Se necesitan "+totalCemento+" bolsas de cemento y "+totalCal+" bolsas de cal");
}