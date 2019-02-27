// module.exports = () => {
//   // ...
// };

// var fs = require('fs');

// fs.readFile('./package.jik', function (err,data) {
//   if (err){
//   console.log('Saved!');
// }
// console.log(data.toString()); 
// });

const chalk = require ("chalk");
const figlet = require ("figlet"); // tipografía
const minimist = require ("minimist"); // ayuda a leer los parámetros (que da el usuario)
const fs = require ('fs' ); // Permite manejar los archivos
const read = process.argv[2]

// leer el archivo 
function readFolder (read){
  fs.readFile(read,'utf8', (err,data)=>{
    if(data){
      console.log(data)
    }else{
      console.log(err)
    }
})
};
readFolder(read);

const validateFolder = (path) =>{ // dice si sirve o no sirve(si es valido o no)
  if (fs.existsSync(path)){ //valida la ruta  
  if(fs.statSync(path).isFile()){ // verifica que sea un archivo
  
    const arrString = path.split(".");
    if(arrString[1] === "md"){
      return true;
      console.log(validateFolder)
    }
  }
  }
return false;
};
