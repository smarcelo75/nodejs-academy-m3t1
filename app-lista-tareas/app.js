require('colors');
const {
    guardarDB,
    leerDB
} = require('../helpers/guardarArchivo');
const {
    mostrarMenu,
    pausar,
    leerEntrada
} = require('../helpers/inquirer');
const { Tareas } = require('../models/tareas');

console.clear;

const main = async() => {
    const tareas = new Tareas();
    let datos = leerDB();
    tareas.cargarTareasFromArray(datos);
    console.log('Hola Mundo'.rainbow);
    let opcion = '';
    do {
        opcion = await mostrarMenu();
        try {
            switch (opcion) {
                case '1':
                    const descripcion = await leerEntrada('Ingrese la descripción de la tarea:');
                    tareas.crear(descripcion);
                    console.log(`Se creo la nueva tarea: ${descripcion.yellow}`.green);
                    guardarDB(tareas.listarArr);
                    break;
                case '2':
                    console.log(tareas.listadoCompleto());
                    break;
                case '3':
                    console.log(tareas.listarPendientesCompletadas());
                    break;
                case '4':
                    console.log(tareas.listarPendientesCompletadas(false));
                    break;
            }
        } catch (error) {
            console.error(String(error.message).red);
        }
        await pausar();
    } while (opcion !== '0');
}

main();