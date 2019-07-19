let pin = "";

let actualizarPin = function () {
    let pinContent = document.getElementById("pin");
    pinContent.innerHTML = pin;
}

let insertarDigito = function (digito) {
    pin += digito;
    actualizarPin();
}

let resetearPin = function () {
    pin = "";
    actualizarPin();
}

let borrarDigito = function () {
    pin = pin.slice(0, -1);
    actualizarPin();
}

let chequearPin = function () {
    if (pin === "1234") {
        alert("Ingresó el pin correctamente");
        resetearPin();
    } else {
        alert("El pin es incorrecto, vuelva a intentar.");
        resetearPin();
    }
}