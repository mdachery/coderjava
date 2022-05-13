/* var text = document.getElementById('preciototal');
window.onload = function() {
  text.addEventListener("input", function() {
    console.log(text.value);
  });
}

*/



const calcular = document.querySelector('#calcular')
const texto = document.querySelector('#texto')


function Calcular(){

    let preciototal = document.getElementById('preciototal').value;

    let numcuotas = document.getElementById('numcuotas').value;

    let tasainteres = document.getElementById('tasainteres').value;

    let nombre = document.getElementById('nombre').value;

    let apellido = document.getElementById('apellido').value;

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

    const cliente = {id:3546, fechanac:"23/03/1976"};
    const enJSON = JSON.stringify(cliente);
    localStorage.setItem("cliente", enJSON);

    const outJSON = JSON.parse(localStorage.getItem("cliente"))

    texto.innerHTML = nombre + " " + apellido + " El valor de la cuota es: " + valorcuotas + ". Su numero de usario es: " + outJSON.id + " y su fecha de nacimiento es: " + outJSON.fechanac  


    }

calcular.addEventListener("click",Calcular);





/*let preciototal = prompt ("Calculadora de cuotas: Ingrese el valor total del producto:");

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


const nombre = [];

nombre[0] = prompt ("Ingrese su nombre: ");
nombre[1] = prompt ("Ingrese su apellido: ");


const cliente = {id:3546, fechanac:"23/03/1976"};
const enJSON = JSON.stringify(cliente);
localStorage.setItem("cliente", enJSON);

const outJSON = JSON.parse(localStorage.getItem("cliente"))


const calcular = document.querySelector('#calcular')
const texto = document.querySelector('#texto')


function Calcular(){

    texto.innerHTML = nombre[0] + " " + nombre[1] + " El valor de la cuota es: " + valorcuotas + ". Su numero de usario es: " + outJSON.id + " y su fecha de nacimiento es: " + outJSON.fechanac  
    }

calcular.addEventListener("click",Calcular);
*/