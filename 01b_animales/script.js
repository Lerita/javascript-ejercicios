/**
 * Hacer un programa que pida por un animal
 * y dependiendo del que se elija, cambiar
 * el atributo src del elemento con id "imagen-animal"
 * con el nombre del archivo correspondiente a ese animal 
 */

 let pick = prompt("Elegí un animal: erizo, foca, gato, panda o perro.");

 let image = document.getElementById("imagen-animal");
 image.src = pick + ".jpg";