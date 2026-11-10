onst estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];


function buscarEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
        
        const estudiante = estudiantes.find(est => est.id === id);

        if (estudiante) {
            resolve(estudiante); 
        } else {
            reject(`Error: No existe un estudiante con el ID ${id}.`); 
        }
    });
}


console.log("Búsqueda del estudiante con ID 2");
buscarEstudiantePorId(2)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });


console.log("Búsqueda del estudiante con ID 1");
buscarEstudiantePorId(1)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });


console.log("Búsqueda del estudiante con ID 10");
buscarEstudiantePorId(10)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });
