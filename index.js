const http = require('http');

function rqLister(req,res){
  console.log(req);
  res.write("<body><h1>Hello from my server</h1></body>");
}
const server= http.createServer(rqLister);

server.listen(3000);