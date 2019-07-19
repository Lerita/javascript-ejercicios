/**
 * Hacer un programa que pida por el nombre de la playlista, y luego actualice
 * el elemento con id "playlist" con dicho valor.
 * Luego, debe preguntar cuantas canciones se desee agregar
 * y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
 * A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
 * "songs-container" el siguiente html:
 * 
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Nombre Banda
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Nombre cancion</p>
 *     </div>
 * </div>`
 * 
 *  Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
 *  por los valores ingresados, correspondientemente
 */


let name = prompt("Ingresar el nombre de la playlist");

let playlistName = document.getElementById('playlist');

playlistName.innerHTML = name;

let songQuantity = prompt("¿Cuántas canciones querés agregar?");

if (songQuantity === 0) {
    alert("Volvé cuando quieras agregar canciones");
} else {
    for (let i = songQuantity; i > 0; i--) {
        let song = prompt("Ingresá la canción que querés agregar");
        let singer = prompt("¿Quién la canta?");

        let container = document.getElementById('songs-container');
        container.innerHTML += `<div class="card mb-3">
                <div class="card-header">
                    Banda/Cantante: ${singer}
                </div>
                <div class="card-body">
                    <p class="card-text"> Canción: ${song}</p>
                </div>
            </div>`;

    }
}


