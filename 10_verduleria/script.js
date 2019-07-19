let precioTotal = 0;
let mensaje = document.getElementById("mensaje");
let total = document.getElementById("total");


let agregarVerdura = function (nombre, precio) {
  mensaje.innerText = `Verdura agregada: ${nombre}`;
  precioTotal = precioTotal + precio;
  total.innerHTML = precioTotal;
}

let reiniciar = function () {
  mensaje.innerHTML = "Seleccione una verdura";
  precioTotal = 0;
  total.innerHTML = precioTotal;
}