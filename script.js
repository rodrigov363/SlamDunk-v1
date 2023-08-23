function ShowAlert() {
    alert ("Que hubiera pasado si Fujima jugaba de titular?");
}

function saludar() {
    var nombre = document.getElementById("nombre").value;
    alert("¡Hola " + nombre + "¡Recuerda que Shohoku Pelea!.");
}

/* Cambio de color de fondo */

var colores = ["white", "grey", "red"];
var indice = 0;

function cambiarColor() {
  document.body.style.backgroundColor = colores[indice];
  indice = (indice + 1) % colores.length;
}