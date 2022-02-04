require('colors');
const {
    mostrarMenu,
    pausar,
    leerEntrada
} = require('../helpers/inquirer');
const { Tareas } = require('../models/tareas');

console.clear;

const main = async() => {
    const tareas = new Tareas();
    console.log('Hola Mundo'.rainbow);
    let opcion = '';
    do {
        opcion = await mostrarMenu();
        switch (opcion) {
            case '1':
                const descripcion = await leerEntrada('Ingrese la descripción de la tarea:');
                tareas.crear(descripcion);
                console.log(`Se creo la nueva tarea: ${descripcion.yellow}`.green);
                break;
            case '2':
                console.log('Listado de tareas: \n'.yellow);
                console.log(tareas.listar());
                break;
        }
        await pausar();
    } while (opcion !== '0');
}

main();