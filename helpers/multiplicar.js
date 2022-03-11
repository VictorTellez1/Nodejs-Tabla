const fs=require('fs');
// const crearArchivo=(base=5)=>{
//     let salida='';
//     for(let i=1;i<11;i++){
//         salida+=(`${base} x ${i} = ${base*i}\n`);
//     }
//     console.log(salida);
//     fs.writeFileSync('holi.txt',salida,);
//     console.log(`Tabla de multiplicar base ${base}.txt creada`)
// }

const crearArchivo=async(base=5,listar=false,hasta=1)=>{
    try{
        let salida='';
        for(let i=1;i<=hasta;i++){
            salida+=(`${base} x ${i} = ${base*i}\n`);
        }
        if(listar){
            console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida,);
        return (`Tabla de multiplicar base ${base}.txt creada`.rainbow)
    }catch(err){
        throw err;
    }
}
module.exports={ //Exportamos la funcion como si fuera un objeto
    crearArchivo //crear archivo:crearArchivo es redundante por eso solo se usa crearArchivo
}