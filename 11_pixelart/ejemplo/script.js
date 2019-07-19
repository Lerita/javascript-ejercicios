const llamarACallback = function(callback) {
    // acá hace otras cosas y después se llama a la otra función.
    callback();
  }
  
  const imprimirSaludo = function() {
    console.log('Hola!');
  }

  const imprimirDespedida = function() {
    console.log('Chau!');
  }
  
llamarACallback(imprimirSaludo);
llamarACallback(imprimirDespedida); 
llamarACallback(function() {
    console.log('Otro mensaje!');
  });


  const contenedorEjemplo = document.getElementById('contenedor-ejemplo');
//   contenedorEjemplo.innerHTML = '<div class="box"></div>';

//   let box = document.getElementsByClassName('box')[0];
//   console.log(box);
//   box.onclick = function() {
//       alert('Hola');
//   }

// Creamos un nodo HTML de tipo div y lo guardamos en la variable box. 
// El nodo todavía no está agregado al DOM

// le agrego la clase "box"
// caja.classList.add('box');
// caja.onclick = function() {
//     alert('Hola');
// }
// caja.appendChild(caja.cloneNode());

// lo agrego al DOM
// contenedorEjemplo.appendChild(caja);

// clono el nodo caja y lo agrego a contenedorEjemplo
// let nuevaCaja = caja.cloneNode(true);
// contenedorEjemplo.appendChild(nuevaCaja);

// let otraCaja = document.createElement('div');
// otraCaja.classList.add('box');
// contenedorEjemplo.appendChild(otraCaja);

// for(let i = 0; i < 5; i++) {
//     let caja = document.createElement('div');
//     caja.classList.add('box');
//     caja.onclick = function() {
//         alert('Hola');
//     }
//     contenedorEjemplo.appendChild(caja);
// }

estante = ["revista", "libro", "comic"];

for(let variable of estante) {
  console.log(variable);
}

for(let i in estante) {
  console.log(`${i}: ${estante[i]}`);
}

estante.push("disco");

let libros = estante.slice(2, 4);  // desde donde queremos arrancar y donde termina
let libros = estante.splice(2, 1); // saca la sección del array, desde dónde arranca y cuántos queremos mostrar