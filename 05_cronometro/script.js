let time = 0;

setInterval(function () {
    time += 0.1;
    document.getElementById("counter").innerHTML = time.toFixed(1);
}, 100);


let vueltas = 0;
let tiempoTotal = 0;

let cronometrarVuelta = function () {
    vueltas++
    let laps = document.getElementById('laps');
    laps.innerHTML += `<p>Vuelta ${vueltas}: ${time.toFixed(1)}</p>`
    tiempoTotal += time;
    time = 0;
    calcularPromedio();
}


calcularPromedio = function () {
    let average = document.getElementById('average');
    let promedio = tiempoTotal / vueltas;
    average.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
}

let reiniciar = function () {
    time = 0;
    vueltas = 0;
    tiempoTotal = 0;
    let laps = document.getElementById('laps');
    laps.innerHTML = `<h2 id="average">Promedio</h2>`;
}
