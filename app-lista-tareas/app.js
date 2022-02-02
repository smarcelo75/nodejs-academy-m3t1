require('colors');
const { mostrarMenu, pausa } = require('../helpers/inquirer');

console.clear;

const main = async() => {
    console.log('Hola Mundo'.rainbow);
    do {
        opcion = await mostrarMenu();
        await pausa();
    } while (opcion !== '0');
}

main();