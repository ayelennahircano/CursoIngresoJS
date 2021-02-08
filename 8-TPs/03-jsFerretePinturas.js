/*
Cano Ayelén Nahir
TP 03 - Ferrete Pinturas.

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaIngresada;
    var resultadoC;

    const PCAF = 32; //punto de congelación del agua en Fahrenheit 
    const fraccion = 0.55;

    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;

    temperaturaIngresada = parseFloat(temperaturaIngresada);

    resultadoC = (temperaturaIngresada - PCAF) * fraccion;
    resultadoC = resultadoC.toFixed(2);

    alert(temperaturaIngresada+"° Fahrenheit son "+resultadoC+"° Centígrados"); 
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
    var resultadoF;

    const PCAF = 32; //punto de congelación del agua en Fahrenheit 
    const fraccion = 1.8;

    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;

    temperaturaIngresada = parseFloat(temperaturaIngresada);

    resultadoF = temperaturaIngresada * fraccion + PCAF;
    resultadoF = resultadoF.toFixed(2);

    alert(temperaturaIngresada+"° Centígrados son "+resultadoF+"° Fahrenheit");

    //https://onlinegdb.com/VDBeKFyRg
}
