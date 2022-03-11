const argv=require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:"Es la base de la tabla de multiplicar"
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption:true,
        default:false,
        describe:'Muesta la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:false,
        default:1,
        describe:'Esta es el numero hasta el que va a llegar la tabla'
    })
    .check((argv,options)=>{
        if(isNaN(argv.base) || isNaN(argv.hasta)){
            throw 'La base y el hasta tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports=argv; //Porque no es un objeto