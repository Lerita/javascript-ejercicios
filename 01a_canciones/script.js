let name = prompt("Ingresar el nombre de la playlist");

let playlistName = document.getElementById('playlist');
playlistName.innerHTML = name;

let songQuantity = prompt("¿Cuántas canciones querés agregar?");

if (songQuantity === 0) {
    alert("Te esperamos cuando quieras agregar canciones");
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


