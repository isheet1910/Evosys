// Step 1 : import http
const http=require('http');
// Step 2 : What to do when request comes
function onRequest(request,response){
    response.setHeader('Content-Type','text/html');
    response.write("<strong>");
    response.write("Welcome To JS on Server");
    response.write("</strong>");
    response.end();
}
// Step 3 : Create server
const server=http.createServer(onRequest);
// Step 4 : call server.listen
const port=3000;
function onServerStart(){
    console.log(`http://localhost:${port} started`);
}

server.listen(port,onServerStart);