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
    try {
        let datos = '';
        if (fs.existsSync(pathFile)) {
            datos = fs.readFileSync(pathFile, { encoding: 'utf-8' });
        } else {
            throw new Error('No existe el archivo de base de datos');
        }
        return JSON.parse(datos);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    guardarDB,
    leerDB
}