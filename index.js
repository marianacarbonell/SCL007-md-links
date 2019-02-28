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
//const figlet = require ("figlet"); // tipografía
//const minimist = require ("minimist"); // ayuda a leer los parámetros (que da el usuario)


const chalk = require("chalk");
const fs = require('fs'); // Permite manejar los archivos
const read = process.argv[2]
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require("node-fetch");

function readFolder(read) {
  let promise = new Promise((res, reject) => {
    let markdown = fs.readFileSync(read).toString()
    const links = markdownLinkExtractor(markdown);
    console.log(links)
    //   links.forEach(function (link) {
    //     console.log(link);
    // });
    const arrPromise = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const fetchLinks = fetch(link).then(res => {
        const objectLinks = {
          url: res.url,
          statusLinks: res.status,
          statusText: res.statusText
        };
        return objectLinks;
      })
        .catch(error => {
          const objectLinks = {
            url: link,
            statusLinks: "FAIL",
          };
          return objectLinks;
        });
        arrPromise.push(fetchLinks);
    }
    Promise.all(arrPromise).then(res =>{
    console.log(res)
    })
  })
};
readFolder(read);






// Validar archivo
// const validateFolder = (path) =>{ 
//   if (fs.existsSync(path)){ //valida la ruta  
//   if(fs.statSync(path).isFile()){ // verifica que sea un archivo

//     const arrString = path.split(".");
//     if(arrString[1] === "md"){
//       return true;
//       console.log(validateFolder)
//     }
//   }
//   }
// return false;
// };
