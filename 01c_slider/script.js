let imagenActual = 1;
let actualizarImagen = function () {
    let imagen = document.getElementById("imagen-animal");
    imagen.innerHTML = imagenActual;
    imagen.src = `imagen_${imagenActual}.jpg`;
}

let actualizarTitulo = function () {
    let title = document.getElementById(`title_${imagenActual}`);
    title.classList.toggle("hidden");
}

let avanzarImagen = function () {
    actualizarTitulo();
    if (imagenActual < 5) {
        imagenActual++;
    } else {
        imagenActual = 1;
    }
    actualizarImagen();
    actualizarTitulo();
}

let retrocederImagen = function () {
    actualizarTitulo();
    if (imagenActual > 1) {
        imagenActual--;
    } else {
        imagenActual = 5;
    }
    actualizarImagen();
    actualizarTitulo();
}