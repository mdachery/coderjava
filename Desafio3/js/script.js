let preciototal = prompt ("Calculadora de cuotas: Ingrese el valor total del producto:");

let numcuotas = prompt ("Ingrese el numero de cuotas:");

let tasainteres = prompt ("Ingrese la tasa de interes total:")

if (tasainteres == 0) {
    tasainteres = null;
}

function roundnumero (numero) {

    numero = numero.toFixed(2);
    return numero;
}

tasainteres = (tasainteres / 100) + 1;

let valorcuotas = (preciototal / numcuotas) * tasainteres;

valorcuotas = roundnumero (valorcuotas);


window.alert("El valor mensual de la cuota es: " + valorcuotas);