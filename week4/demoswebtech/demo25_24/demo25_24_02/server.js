import exp from 'constants';
import express  from 'express';
import path from 'path';
import app from './app/app-route.js';

const server = express();
const port = 3000;
const __dirname = path.resolve(path.dirname(''));

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.get('/',(req,resp)=>{
    resp.setHeader('Content-Type',"text/html");
    // resp.send({message:"Welcome to Express Server"});
    resp.sendFile(__dirname+"/index.html");
});

server.get('/jquery-3.6.0.js',(req,resp)=>{
    resp.setHeader('Content-Type',"application/javascript");
    resp.sendFile(__dirname+"/js/jquery-3.6.0.js");
});

server.get('/main.js',(req,resp)=>{
    resp.setHeader('Content-Type',"application/javascript");
    resp.sendFile(__dirname+"/js/main.js");
});

server.use('/app',app);
server.listen(port,()=>{console.log("http://localhost:3000");})
