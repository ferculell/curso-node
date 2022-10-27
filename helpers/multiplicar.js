const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar, final) => {

    try {
        const ruta = `./salida/tabla-del-${base}.txt`;
        let salida = `
=========================
    Tabla del ${base}
=========================

`;
        let consola = `
=========================
    Tabla del ${base}
=========================

`.cyan;
    
        for (let i = 1; i <= final; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ` + `${base * i}\n`.green;
        }

        if (listar) {
            console.log(consola);
        }
    
        fs.writeFileSync(ruta, salida);
    
        return ruta;
    
        // fs.writeFile(`tabla-del-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
    
        //     console.log(`El archivo tabla-del-${base}.txt ha sido creado exitosamente`);
        // });
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
};