const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html=fs.readFileSync('./Template/index.html','utf-8')
const server = http.createServer((request,response)=>{
    response.end(html);
    console.log('A new request received.');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started.');
})


