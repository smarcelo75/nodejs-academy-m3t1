const { Tarea } = require('../models/tarea');

class Tareas {
    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas) {
        if (tareas.length > 0) {
            tareas.forEach(tarea => {
                this._listado[tarea.id] = tarea;
            });
        }
    }

    crear(desc) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        return tarea;
    }

    listar() {
        return this._listado;
    }

    get listarArr() {
        let listaArr = [];
        Object.keys(this._listado).forEach(tarea => {
            listaArr.push(this._listado[tarea]);
        })
        return listaArr;
    }

    listadoCompleto() {
        let indice = 0;
        let numero = '';
        let descripcion = '';
        let completadoEn = '';
        let listado = '';
        let txtTarea = '';
        Object.keys(this._listado).forEach(tarea => {
            indice += 1;
            numero = String(indice).green;
            descripcion = String(this._listado[tarea].desc).white;
            if (this._listado[tarea].completadoEn === null) {
                completadoEn = 'Pendiente'.red;
            } else {
                completadoEn = 'Completado'.green;
            }
            txtTarea = `${numero}. ${descripcion} :: ${completadoEn}\n`;
            listado += txtTarea;
        })
        return listado;
    }
}

module.exports = {
    Tareas
}