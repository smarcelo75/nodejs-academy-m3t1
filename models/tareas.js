const colores = require('colors');
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

    listarPendientesCompletadas(completadas = true) {
        let indice = 0;
        let numero = '';
        let descripcion = '';
        let listado = '';
        let txtTarea = '';
        if (completadas) {
            Object.keys(this._listado).forEach(tarea => {
                if (this._listado[tarea].completadoEn !== null) {
                    indice += 1;
                    numero = String(indice).green;
                    descripcion = String(this._listado[tarea].desc).green;
                    txtTarea = `${numero}. ${descripcion}\n`;
                    listado += txtTarea;
                }
            })
        } else {
            Object.keys(this._listado).forEach(tarea => {
                if (this._listado[tarea].completadoEn === null) {
                    indice += 1;
                    numero = String(indice).green;
                    descripcion = String(this._listado[tarea].desc).red;
                    txtTarea = `${numero}. ${descripcion}\n`;
                    listado += txtTarea;
                }
            })
        }
        return listado;
    }

    listarPendientesCompletadas_v2(completadas = true) {
        let criterio;
        let numero = '';
        let descripcion = '';
        let txtTarea = '';
        let txtListado = '';
        let color;
        if (completadas) {
            criterio = t => t.completadoEn !== null;
            color = colores.green;
        } else {
            criterio = t => t.completadoEn === null;
            color = colores.red;
        }
        let listado = this.listarArr.filter(t => criterio(t));
        for (let i = 0; i < listado.length; i += 1) {
            numero = String(i + 1).green;
            descripcion = color(listado[i].desc);
            txtTarea = `${numero}. ${descripcion}\n`;
            txtListado += txtTarea;
        }
        return txtListado;
    }
}

module.exports = {
    Tareas
}