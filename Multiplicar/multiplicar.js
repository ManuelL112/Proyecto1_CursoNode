// import 
const fs = require('fs');
const colors = require('colors')

let crearArchivo = (base) => {
    let data = '';
    return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject('BASE no es un numero')
                return;
            }

            console.log('TABLA DE MULTIPLICAR'.green);
            console.log('===================='.green);
            console.log(`TABLA DEL ${ base }`.green);
            console.log('--------------------'.blue);

            for (let i = 1; i < 11; i++) {
                data += `${base} * ${i} = ${base*i} \n`;


                console.log(`${ base } * ${ i } = ${ base*i }`.red);
            }


            fs.writeFile(`Tablas/table-${ base }.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`table-${ base }.txt`);
            });
        }


    )
}

module.exports = {
    crearArchivo
}