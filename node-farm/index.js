const fs = require("fs");
const http = require('http');
const { type } = require("os");
const url = require('url');
// const hello = 'Hello World';
// // console.log(hello);
// // Blocking Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about Avocado: ${textIn}.\n Created on ${Date.now()} `;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');
// Non Blocking Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if(err) return console.log('ERROR 😞');
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile('./final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😃');
//       });
//     });
//   });
// });
// console.log("will read file");
const templateOverview = fs.readFile(`${__dirname}/templates/template-overview.html`, "utf-8");
const templateCard = fs.readFile(`${__dirname}/templates/template-card.html`, "utf-8");
const templateProduct = fs.readFile(`${__dirname}/templates/template-product.html`, "utf-8");
const data = fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  // Overview Page
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {'content-type':'text-html'})
    res.end('This is a Overview');
    // Products Page
  } else if (pathName === '/product') {
    
    res.end('This is a Product');
    // API
  } else if (pathName === '/api') { 
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      res.writeHead(200, {'Content-type':'applicaton/json'});
      res.end(data);
      
    });
    // Not found
  }
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header':'Hello-world'
      
    });
    res.end('<h1>Page not found</h1>');
  }
});
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});

