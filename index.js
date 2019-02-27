// module.exports = () => {
//   // ...
// };

// var fs = require('fs');

// fs.readFile('./package.json', function (err,data) {
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
const markdownLinkExtractor = require('markdown-link-extractor');

// leer el archivo 
function readFolder (read){
  return new Promise((res,reject) => {
  let markdown = fs.readFileSync(read).toString()
  const links = markdownLinkExtractor(markdown);
  console.log(links)
//   links.forEach(function (link) {
//     console.log(link);
// });
})
}
readFolder(read);


// Validar archivo
const validateFolder = (path) =>{ 
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
