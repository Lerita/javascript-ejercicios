/**
 - Crear una variable imagenActual, e iniciarla en 1
 - Crear una funcion avanzarImagen, que lo que haga es subir en 1 imagenActual,
 si imagenActual esta en 5, debe cambiarla a 1, luego debe llamar a
 la funcion actualizarImagen
 - Crear una funcion retrocederImagen, que lo que haga es disminuir en 1 imagenActual,
 si imagenActual esta en 1, debe cambiarla a 5, luego debe llamar a
 la funcion actualizarImagen
 - Crear una funcion actualizarImagen, que obtenga el elemento html con
 id "imagen-animal" y reemplace su atributo "src" por "imagen_X.jpg", donde X
 es el valor de la variable imagenActual
 */

 let imagenActual = 1;
 let actualizarImagen = function() {
     let imagen = document.getElementById("imagen-animal");
     imagen.innerHTML = imagenActual;
     imagen.src = `imagen_${imagenActual}.jpg`;
 }

 let actualizarTitulo = function() {
    let title = document.getElementById(`title_${imagenActual}`);
    title.classList.toggle("hidden"); 
 }

 let avanzarImagen = function() {
    actualizarTitulo();
    if (imagenActual < 5) {
    imagenActual++;
    } else {
        imagenActual = 1;
    }
    actualizarImagen();
    actualizarTitulo();
 }
 
 let retrocederImagen = function() {
     actualizarTitulo();
     if (imagenActual > 1) {
        imagenActual--;
     } else {
         imagenActual = 5;
     }
     actualizarImagen();
     actualizarTitulo();
 }