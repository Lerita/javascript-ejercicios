let reproducirCancion = function (nombreCancion, artista, fechaLanzamiento) {
   let playing = document.getElementById("playing");
   playing.innerText = `${nombreCancion}
    ${artista}
    ${fechaLanzamiento}`;
}