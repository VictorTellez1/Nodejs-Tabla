const colors=require('colors')
const argv= require('./config/yargs')
const {crearArchivo} =require('./helpers/multiplicar') //Traemos el objeto y solo nos quedamos con lo que nos interesa
console.clear();

// const base=5;
// console.log(argv);


// const [,,arg3='base=5']=process.argv;
// const [,base=5]=arg3.split('=');

// fs.writeFileSync('holi.txt',salida,(err)=>{
//     if (err) throw err;
//     console.log('Se grabo correctamente el archivo')
// })
 crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.gray,'creado'))
    .catch(err=>console.log(err));

