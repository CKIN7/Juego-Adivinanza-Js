//Aca el juego selecciona un numero al azar para que adivines
let numeroAzar = Math.floor(Math.random() * 1000) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//Esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    if(intentos > 10){
        mensaje.textContent = "Perdiste"
        return numeroEntrada.disabled = true;
          
    }
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 1000) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 1000.';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'gray';
    }
}