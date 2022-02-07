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
    console.log('=========================='.green);
    console.log('  Seleccione un opción');
    console.log('=========================='.green);
    console.log('');

    const question = [{
        type: "list",
        name: "opcion",
        message: '¿Que desea hacer?',
        choices: itemsMenu,
    }];
    const { opcion } = await inquirer.prompt(question);
    return opcion;
}

const pausar = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: 'Presione ' + 'ENTER'.yellow + ' para continuar',
    }];
    const { enter } = await inquirer.prompt(question);
    return enter;
};

const leerEntrada = async(mensaje) => {
    const question = [{
        type: 'input',
        name: 'valor',
        message: mensaje,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }];
    const { valor } = await inquirer.prompt(question);
    return valor;
}

const listadoTareasBorrar = async(listado) => {
    let listadoTareas = [{ name: '0. Cancelar'.yellow, value: '0' }];
    for (let i = 0; i < listado.length; i += 1) {
        listadoTareas.push({ name: `${i+1}. ${listado[i].desc}`, value: `${listado[i].id}` });
    }
    const question = [{
        type: "list",
        name: "id",
        message: '¿Seleccione la tarea a borrar?',
        choices: listadoTareas,
    }];
    const { id } = await inquirer.prompt(question);
    return id;
}

const confirmar = async(mensaje) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message: mensaje,
    }];
    const { ok } = await inquirer.prompt(question);
    return ok;
};

const mostrarListadoChecklist = async(listado) => {
    let listadoTareas = [];
    for (let i = 0; i < listado.length; i += 1) {
        listadoTareas.push({
            name: `${i+1}. ${listado[i].desc}`,
            value: `${listado[i].id}`,
            checked: listado[i].completadoEn !== null ? true : false
        });
    }
    const question = [{
        type: "checkbox",
        name: "ids",
        message: 'Selecciones',
        choices: listadoTareas,
    }];
    const { ids } = await inquirer.prompt(question);
    return ids;
}

module.exports = {
    mostrarMenu,
    pausar,
    leerEntrada,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}