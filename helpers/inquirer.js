const inquirer = require('inquirer');

const opciones = [];
for (let i = 1; i < 7; i += 1) {
    opciones.push(`${i}.`.green);
}
opciones.push('0.'.green);

let itemsMenu = [];
itemsMenu.push({ name: `${opciones[0]} Crear tarea`, value: '1' });
itemsMenu.push({ name: `${opciones[1]} Listar tareas`, value: '2' });
itemsMenu.push({ name: `${opciones[2]} Listar tareas completadas`, value: '3' });
itemsMenu.push({ name: `${opciones[3]} Listar tareas pendientes`, value: '4' });
itemsMenu.push({ name: `${opciones[4]} Completar tarea(s)`, value: '5' });
itemsMenu.push({ name: `${opciones[5]} Borrar tarea`, value: '6' });
itemsMenu.push({ name: `${opciones[6]} Salir`, value: '0' });

const mostrarMenu = async() => {
    console.log('==========================');
    console.log('  Seleccione un opción');
    console.log('==========================');
    console.log('');

    const promesa = new Promise((resolve, reject) => {
        inquirer
            .prompt([{
                type: "list",
                name: "opcion",
                message: '¿Que desea hacer?',
                choices: itemsMenu,
            }])
            .then((answers) => {
                resolve(answers.opcion);
            });
    });
    return promesa;
}

const pausa = () => {
    const promesa = new Promise((resolve, reject) => {
        inquirer
            .prompt([{
                type: 'input',
                name: 'enter',
                message: 'Presione ' + 'ENTER'.yellow + ' para continuar',
            }])
            .then((answers) => {
                resolve(answers.enter);
            })
    });
    return promesa;
};

module.exports = {
    mostrarMenu,
    pausa
}