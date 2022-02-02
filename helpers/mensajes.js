const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const { resolve } = require('path');

const mostrarMenu = (itemSeleccionado = 0) => {
    const indicaciones = '(Use arrows keys)'.gray;
    const marcador = '> ';
    const sinMarcador = '  ';
    const opciones = [];
    for (let i = 1; i < 7; i += 1) {
        opciones.push(`${i}.`.green);
    }
    opciones.push('0.'.green);

    let itemsMenu = [];
    itemsMenu.push('Crear tarea');
    itemsMenu.push('Listar tareas');
    itemsMenu.push('Listar tareas completadas');
    itemsMenu.push('Listar tareas pendientes');
    itemsMenu.push('Completar tarea(s)');
    itemsMenu.push('Borrar tarea');
    itemsMenu.push('Salir');

    console.log('==========================');
    console.log('  Seleccione un opción');
    console.log('==========================');
    console.log('');
    console.log(`? ¿Que desea hacer? ${indicaciones}`);
    let textoMenu = '';
    for (let i = 0; i < 7; i += 1) {
        if (itemSeleccionado == i) {
            textoMenu = `${marcador.yellow} ${opciones[i]} ${itemsMenu[i].yellow}`;
        } else {
            textoMenu = `${sinMarcador} ${opciones[i]} ${itemsMenu[i].white}`;
        }
        console.log(textoMenu);
    };
    console.log('');

    const promesa = new Promise((resolve, reject) => {
        const rl = readline.createInterface({ input, output });
        rl.question('Seleccione una opción:', respuesta => {
            rl.close();
            resolve(respuesta);
        });
    });
    return promesa;
}

const pausa = () => {
    const promesa = new Promise((resolve, reject) => {
        const rl = readline.createInterface({ input, output });
        rl.question('Presione ' + 'ENTER'.yellow + ' para continuar', respuesta => {
            rl.close();
            resolve(respuesta);
        });
    });
    return promesa;
}

module.exports = {
    mostrarMenu,
    pausa
}