const { crearArchivoTabla } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
//console.log(argv);

// const [ , , arg3 = '--base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
const base = argv.b;
const listar = argv.l;
const final = argv.f;

crearArchivoTabla(base, listar, final)
    .then((res) => {
        const nombre = res.cyan;
        console.log(`El archivo ${nombre} ha sido creado exitosamente`);
    })
    .catch((err) => console.error(err));
