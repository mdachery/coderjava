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

const nombre = [];

nombre[0] = prompt ("Ingrese su nombre: ");
nombre[1] = prompt ("Ingrese su apellido: ");


const cliente = {id:3546, fechanac:"23/03/1976"};

window.alert(nombre[0] + " " + nombre[1] + " deseas realizar otro pedido? Por favor verifique sus datos antes de continuar: Numero de cliente: " + cliente.id + " Fecha de nacimiento: " + cliente.fechanac);


