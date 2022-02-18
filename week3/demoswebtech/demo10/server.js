const http=require('http');
const port=3000
http.createServer(function (req,resp){ 
    resp.setHeader('CONTENT-TYPE','text/html');
    resp.write("Welcome to function chaning and anonymous function callback!");
    resp.end();
}).listen(port,function (){
    console.log(`http://localhost:${port} started`);
});