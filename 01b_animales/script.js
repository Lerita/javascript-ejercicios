let pick = prompt("Elegí un animal: erizo, foca, gato, panda o perro.");

let image = document.getElementById("imagen-animal");
image.src = pick + ".jpg";