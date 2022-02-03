const { v4: uudv4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uudv4();
        this.desc = desc;
    }
}

module.exports = {
    Tarea
}