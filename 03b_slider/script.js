numeroImagenAnterior = 1;

let cambiarImagen = function (numeroImagen) {
    let image = document.getElementById("imagen-animal");
    image.src = `imagen_${numeroImagen}.jpg`;

    // removerSelected();
    let puntoAnterior = document.getElementById(`dot_${numeroImagenAnterior}`)
    puntoAnterior.classList.remove("selected");

    let punto = document.getElementById(`dot_${numeroImagen}`);
    punto.classList.add("selected");

    let tituloAnterior = document.getElementById(`title_${numeroImagenAnterior}`);
    tituloAnterior.classList.add("hidden");

    let titulo = document.getElementById(`title_${numeroImagen}`);
    titulo.classList.remove("hidden");


    numeroImagenAnterior = numeroImagen;
}

// let removerSelected = function() {
//     for (i = 1; i < 6; i++) {
//     let punto = document.getElementById(`dot_${i}`);
//     punto.classList.remove("selected");
//     }
// }

// document.getElementById("dot_1").onclick = function() {
//     cambiarImagen(1);
// }

// for (let i = 1; i <= 5; i++) {
//     document.getElementById(`dot_${i}`).onclick = function() {
//         cambiarImagen(i);
//     }

// }