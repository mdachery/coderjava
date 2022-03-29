let texto = "";
let textoingresado = "";

while (textoingresado != "esc") {
    
    textoingresado = prompt("Ingrese su nombre y apellido separadamente: ");

    if (textoingresado != "esc") {

        texto = texto.concat(" ", textoingresado);

        window.alert(texto);
   
    }

}



