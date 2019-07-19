/** 
 * - Declarar una variable contador y ponerle el valor 0
 * - Declarar una función incrementarContador, que incremente en 1 la variable contador,
 * y llame a la función actualizarContador
 * - Declarar una función disminuirContador, que disminuzca en 1 la variable contador
 * si esta es mayor a 0, y luego llame a la función actualizarContador
 * - Declarar una función reiniciarContador, que setee la variable contador en 0, 
 * y luego llame a la función actualizarContador
 * - Declarar una función actualizarContador, que setee el html del elemento con id
 * "counter" con el valor de la variable contador
 * Llamar desde los bottones a las funciones correspondientes con onclick
 * - Llamar inicialmente a la función actualizarContador
 */


 let contador = 0;

 let actualizarContador = function() {
    let counter = document.getElementById("counter");
    counter.innerHTML = contador;
 }
 
 let incrementarContador = function() {
        contador++;
        actualizarContador();
}
 
 let disminuirContador = function() {
    contador--;
    actualizarContador();
 }

 let reiniciarContador = function() {
     contador = 0;
     actualizarContador();
 } 

