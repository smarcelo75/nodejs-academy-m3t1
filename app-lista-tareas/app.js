require('colors');
const { mostrarMenu, pausa } = require('../helpers/mensajes');

console.clear();

const main = async() => {
    console.log('Hola Mundo'.rainbow);
    let opcion = 1;
    do {
        opcion = await mostrarMenu(opcion - 1);
        await pausa();
    } while (opcion !== '0');
    console.clear();
}

main();