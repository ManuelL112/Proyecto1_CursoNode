const { crearArchivo } = require('./Multiplicar/multiplicar.js');



let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]



crearArchivo(base)
    .then(archivo => console.log(`Creado ${ archivo }`))
    .catch(e => console.log(e));