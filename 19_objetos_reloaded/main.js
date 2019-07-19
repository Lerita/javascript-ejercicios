// . artistasSolistas, que devuelva un array con lxs artistas que sean solistas

const solista = artista => artista.solista;
const artistasSolistas = () => artistas.filter(solista);

// . artistasPorEdad, que tome un parámetro "edad" y devuelva un array con lxs artistas que tengan dicha edad


const artistasPorEdad = age => {
    const checkAge = artista => artista.edad === age;
    return artistas.filter(checkAge);
}

// . cantidadDeArtistasPorInstrumento, que tome un parámetro instrumento "instrumento" y devuelva un número indicando la cantidad de artistas que tocan dicho instrumento

const cantidadDeArtistasPorInstrumento = instrumento => {
    const checkInstrumento = artista => artista.instrumento === instrumento;
    return artistas.filter(checkInstrumento).length;
}

// . cantidadDeArtistasPorGenero, que tome un parámetro "genero" y devuelva un número indicando la cantidad de artistas que tocan dicho género

const cantidadDeArtistasPorGenero = genero => {
    const checkGenero = artista => artista.genero === genero;
    return artistas.filter(checkGenero).length;
}

// . artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y devuelva un array con lxs artistas que tiene más de esa cantidad de discos

const artistasConMasDiscosQue = cantidadDeDiscos => {
    const checkDiscos = artista => artista.discos.length === cantidadDeDiscos;
    return artistas.filter(checkDiscos);
}

// . artistaTocoEnAnio, que tome por parámetro un parámetro "artista" y "anio", y devuelva true si dicho artista tocó su último recital en dicho año

const artistaTocoEnAnio = (nombreArtista, anio) => {
    const conNombre = artista => artista.nombre === nombreArtista;
    const artista = artistas.find(conNombre);

    return artista.ultimoRecital.anio === anio;
}


// . artistaConMasEntradasVendidas, que devuelva el objeto artista que vendió más entradas en su último recital

const artistaConMasEntradasVendidas = () => {
    let masEntradasVendidas = 0;
    let artistaConMasEntradas = {};

    for (const artista of artistas) {
        if (artista.ultimoRecital.entradasVendidas > masEntradasVendidas) {
            masEntradasVendidas = artista.ultimoRecital.entradasVendidas;
            artistaConMasEntradas = artista;
        }
    }

    return artistaConMasEntradas;
}

// . artistaConMayorRecaudacion, que devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)

// const artistaConMayorRecaudacion = () => {
//     let entradasVendidas = 0;
//     let costoEntradas = 0;
//     let recaudacion = 0;

//     for (const artista of artistas) {
//         entradasVendidas = artista.ultimoRecital.entradasVendidas;
//         costoEntradas = artista.ultimoRecital.entradasVendidas;
//         recaudacion = entradasVendidas * costoEntradas;

//         if (recaudacion >= )
//     }

//     return artistaQueMasRecaudo;
// }