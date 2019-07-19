let contador = 0;

let actualizarContador = function () {
   let counter = document.getElementById("counter");
   counter.innerHTML = contador;
}

let incrementarContador = function () {
   contador++;
   actualizarContador();
}

let disminuirContador = function () {
   contador--;
   actualizarContador();
}

let reiniciarContador = function () {
   contador = 0;
   actualizarContador();
}

