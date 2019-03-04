// module.exports = () => {
//   // ...
// };

const read = process.argv[2]
const fs = require('fs'); // Permite manejar los archivos
const markdownLinkExtractor = require('markdown-link-extractor');
const path = require("path");
const fetch = require("node-fetch");
const pathAbsolute = path.resolve(read)

function mdLinks(pathAbsolute) {
  const extention= path.extname(pathAbsolute);
  if(fs.lstatSync(pathAbsolute).isDirectory()){
    fs.readdirSync(pathAbsolute).forEach(file =>{
      if(fs.lstatSync(pathAbsolute + "/" + file).isDirectory() || path.extname(pathAbsolute + "/" + file)===".md"){
        mdLinks(pathAbsolute + "/" + file)
      }
    })
  }else if(fs.lstatSync(pathAbsolute).isFile() && extention===".md"){
    let markdown = fs.readFileSync(pathAbsolute).toString()
    const links = markdownLinkExtractor(markdown);
    const arrPromise = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const text = links [i].text;
      const fetchLinks = fetch(link).then(res => {
        if(process.argv[3] ==="--validate"){
          const objectLinks = {
            url: res.url,
            statusLinks: res.status,
            text: text,
            File: pathAbsolute,
            statusText: res.statusText
        
          };
          return objectLinks;
        }else{
          const objectLinks = {
            url: res.url,
            File: pathAbsolute,
            text: text,
        }
        return objectLinks;
      }
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
    }).catch(error =>{
      console.log(error);
    })
  }
};
mdLinks(pathAbsolute);





