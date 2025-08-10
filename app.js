let numeroSecreto = 11;
let numeroUsuario = 0;
let intentos = 1;
let intentosPalabra = "intento"

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 20 por favor: ");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Has acertado, el numero secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentosPalabra}.`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert("El numero secreto es mayor.")
        } else {
            alert("El numero secreto es menor.")
        }    
        intentos = intentos + 1;
        intentosPalabra = "INTENTOS"
        //alert("Lo siento, no acertaste el numero.")
    }
}


// alert("Hola Mundo"); Muestra cuadro de dialogo con el mensaje que se encuentra entre comillas.

/*
    Diversos tipos de comentarios
*/

//Usa console.log puede ser util ara saber como esta funcionando el programa, las variables y datos.

//Definir el tipo de variable al ingresar por un cuadro de texto. O dara error.
// suma += numero: El simbolo += nos ayuda a omitir "suma = suma + numero".