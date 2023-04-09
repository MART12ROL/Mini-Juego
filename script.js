// Generar un número aleatorio entre 1 y 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//var intentos =0;

function adivinarNumero() {
  // Obtener el número ingresado por el usuario
  var numero = document.getElementById("numero").value;

  if (numero == numeroAleatorio) {
    // El usuario adivinó el número
    mostrarPopup();
    reiniciarJuego();
  } else if (numero < numeroAleatorio) {
    // El número ingresado es menor al número aleatorio
    document.getElementById("mensaje").innerHTML = "Intenta con un número mayor.";
    document.getElementById("mensaje").style.color = "red";
    //intentos++;
  } else {
    // El número ingresado es mayor al número aleatorio
    document.getElementById("mensaje").innerHTML = "Intenta con un número menor.";
    document.getElementById("mensaje").style.color = "red";
   // intentos++;
  }

    // Actualizar el número de intentos en la página
   // document.getElementById("intentos-numero").textContent = intentos;
}

function reiniciarJuego() {
  // Reiniciar el juego
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("numero").value = "";
}

function mostrarPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
}

function cerrarPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}