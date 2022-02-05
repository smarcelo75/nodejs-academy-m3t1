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

const leerDB = () => {
    let datosJson = {};
    if (fs.existsSync(pathFile)) {
        datos = fs.readFileSync(pathFile, { encoding: 'utf-8' });
        if (String(datos).trim().length > 0) {
            datosJson = JSON.parse(datos);
        }
    }
    return datosJson;
}

module.exports = {
    guardarDB,
    leerDB
}