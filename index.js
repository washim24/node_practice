const http = require('http');

// const fs= require('fs').writeFileSync;
// // console.log(__dirname);
// //------------------create new file --------------------------//
// // fs.writeFileSync("code.text","Hello washim this is first file with filesystem");

// fs("text2.text","This is second file ");

// var colors = require('colors');
// console.log("package.json".gray);

const data =require('./data');
const server = http.createServer((req,resp) =>{
    resp.writeHead(200,{'Content-type':'application\json'});
    // resp.write(JSON.stringify({name:'washim amjad',email:'ninza4us@gmail.com'}));//previous
    resp.write(JSON.stringify(data));
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);