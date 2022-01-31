const mostrarMenu = (itemSeleccionado = 0) => {
    const indicaciones = '(Use arrows keys)'.gray;
    const marcador = '> ';
    const sinMarcador = '  ';
    const opciones = [];
    for (let i = 1; i < 8; i += 1) {
        opciones.push(`${i}.`.green);
    }

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
}

module.exports = {
    mostrarMenu
}