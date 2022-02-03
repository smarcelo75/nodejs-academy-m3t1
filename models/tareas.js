const { Tarea } = require('../models/tarea');

class Tareas {
    constructor() {
        this._listado = {};
    }

    crear(desc) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        return tarea;
    }

    listar() {
        return this._listado;
    }
}

module.exports = {
    Tareas
}