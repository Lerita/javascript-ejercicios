const imprimirNombresEstudiantes = () => {
    for (const estudiante of estudiantes) {
        console.log(`${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`);
    }
}

const obtenerEstudiantesPorCasa = (nombreCasa) => {
    const esDeLaCasa = estudiante => estudiante.casa === nombreCasa;

    const estudiantesPorCasa = estudiantes.filter(esDeLaCasa);

    return estudiantesPorCasa;
};

const obtenerMayores = (edadEstudiante) => {
    const estudianteMayor = estudiante => estudiante.edad > edadEstudiante;

    const estudiantesMayores = estudiantes.filter(estudianteMayor);

    return estudiantesMayores;
};


const estudiantesConFamiliares = (...familiares) => {
    const tieneFamiliar = estudiante => familiares.includes(estudiante.familiar);

    const estudiantesConFamiliar = estudiantes.filter(tieneFamiliar);

    return estudiantesConFamiliar;
}


const estudiantesConMasAmigxsQue = numero => {
    const masAmigxsQue = estudiante => estudiante.amigxs.length >= numero;
    const estudiantesAmigxs = estudiantes.filter(masAmigxsQue);

    return estudiantesAmigxs;
}


const obtenerPromedioDeEstudiante = estudiante => {
    const sumaTotal = (total, materia) => total += materia.promedio;
    const sumaPromedios = estudiante.materias.reduce(sumaTotal, 0);

    return sumaPromedios / estudiante.materias.length;
}


const estudiantesConPromedioMayorA = numero => {
    const promedioMayor = estudiante => obtenerPromedioDeEstudiante(estudiante) > numero;

    return estudiantes.filter(promedioMayor);
}


const mejoresEstudiantesPorCasa = casa => {
    const estudiantesCasa = obtenerEstudiantesPorCasa(casa);
    const mejorPromedio = estudiante => obtenerPromedioDeEstudiante(estudiante) > 6;

    return estudiantesCasa.filter(mejorPromedio);
}


const casaConMejoresEstudiantes = () => {
    const casas = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
    let comparacion = 0;
    let casaConMasEstudiantes = "";

    for (const casa of casas) {
        const mejoresEstudiantes = mejoresEstudiantesPorCasa(casa).length;
        if (mejoresEstudiantes > comparacion) {
            comparacion = mejoresEstudiantes;
            casaConMasEstudiantes = casa;
        }
    }
    return casaConMasEstudiantes;
}
