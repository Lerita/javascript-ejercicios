let biblioteca = [[], [], []];
const libroSeleccionable = document.getElementsByClassName('libro-seleccionable');
let libroSeleccionado;
let estante = document.getElementsByClassName('estante');


for (let libros of libroSeleccionable) {
    libros.onclick = function () {
        let librosSelect = document.getElementsByClassName('seleccionado');

        for (let librosSel of librosSelect) {
            librosSel.classList.remove('seleccionado');
        }

        libros.classList.add('seleccionado');
        libroSeleccionado = libros.innerHTML;
    }
}


for (let i = 0; i < estante.length; i++) {
    estante[i].onclick = function () {

        if (biblioteca[i].length < 5) {
            biblioteca[i].push(libroSeleccionado);
            actualizarBiblioteca();
        }
    }
}

const actualizarBiblioteca = function () {
    for (let i = 0; i < biblioteca.length; i++) {
        estante[i].innerHTML = "";

        for (let j = 0; j < biblioteca[i].length; j++) {
            const div = document.createElement('div');
            div.classList.add('libro');
            div.innerHTML = biblioteca[i][j];
            estante[i].appendChild(div);
        }
    }
}
