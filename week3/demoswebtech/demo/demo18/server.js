const http = require('http');

function onRequest(req, resp) {
    resp.write("Welcome");
    resp.end();
}
const server = http.createServer();

function onServerStart() {
    console.log('http:')
}
server.listen(port)