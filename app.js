let cantidadMaxima = 100;
let numeroSecreto = Math.floor(Math.random()*cantidadMaxima)+1; // Genera un numero aleatorio entre 1 y 100
let numeroUsuario = 0;
let intentos = 1;
//let intentosPalabra = "intento"
let intentosPermitidos = 5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${cantidadMaxima} por favor: `));

    if (intentos == intentosPermitidos) {
        alert(`Lo siento, no acertaste el numero, ya se te acabaron los ${intentosPermitidos} intentos.`);
        break;
    }
    console.log(typeof(numeroUsuario)); // Muestra el tipo de dato de la variable numeroUsuario

    if (numeroUsuario == numeroSecreto) {
        alert(`Has acertado, el numero secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "INTENTOSS"}.`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert("El numero secreto es mayor.")
        } else {
            alert("El numero secreto es menor.")
        }    
        //intentos = intentos + 1;
        intentos++;
        //intentosPalabra = "INTENTOS"
    }
}

//alert("Lo siento, no acertaste el numero, ya se te acabaron los intentos.")

// alert("Hola Mundo"); Muestra cuadro de dialogo con el mensaje que se encuentra entre comillas.

/*
    Diversos tipos de comentarios
*/

//Usa console.log puede ser util ara saber como esta funcionando el programa, las variables y datos.

//Definir el tipo de variable al ingresar por un cuadro de texto. O dara error.
// suma += numero: El simbolo += nos ayuda a omitir "suma = suma + numero".