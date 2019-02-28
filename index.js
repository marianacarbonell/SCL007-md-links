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


const chalk = require("chalk");
const fs = require('fs'); // Permite manejar los archivos
const read = process.argv[2]
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require("node-fetch");

function mdLinks(read) {
  let promise = new Promise((res, reject) => {
    let markdown = fs.readFileSync(read).toString()
    const links = markdownLinkExtractor(markdown);
    // console.log(links)
    //   links.forEach(function (link) {
    //     console.log(link);
    // });
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
            statusText: res.statusText
          };
          return objectLinks;
        }else{
          const objectLinks = {
            url: res.url,
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
    })
  })
};
mdLinks(read);





