const fs = require('fs');
const pathFile = 'database/tareas.json';

const guardarDB = (datos) => {
    const data = JSON.stringify(datos);
    try {
        fs.writeFileSync(pathFile, data);
    } catch (error) {
        throw new Error('No se pudo guardar en la base de datos');
    }
}

module.exports = {
    guardarDB
}