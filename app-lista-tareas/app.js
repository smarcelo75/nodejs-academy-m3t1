require('colors');
const { mostrarMenu, pausa } = require('../helpers/inquirer');
const { Tareas } = require('../models/tareas');

console.clear;

const main = async() => {
    const tareas = new Tareas();
    console.log('Hola Mundo'.rainbow);
    do {
        opcion = await mostrarMenu();
        switch (opcion) {
            case '1':
                const tarea = tareas.crear('Nueva Tarea de prueba');
                console.log('Se creo una nueva tarea: \n'.green);
                console.log(tarea);
                break;
            case '2':
                console.log('Listado de tarea: \n'.yellow);
                console.log(tareas.listar());
                break;
        }
        await pausa();
    } while (opcion !== '0');
}

main();