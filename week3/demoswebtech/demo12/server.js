const http=require('http');
const fs=require('fs');
const port=3000;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    // async
    fs.readFile(__dirname+'/index.html',(err,data)=>{
        if(err){

            resp.write("File Error");
            resp.end();
        }else{
            resp.write("req.method==="+req.method)
            resp.write(data);
            resp.end();
        }
    });

    // fs.readFileSync(__dirname+'/index.html',(err,data)=>{
    //     if(err){
    //         resp.write("File Error");
    //         resp.end();
    //     }else{
    //         resp.write(data);
    //         resp.end();
    //     }
    // });
    
}).listen(port,()=>{
    console.log(`http://localhost:${port} started`);
});

// D:\03.Training2022\02.TechErp\week3-WebTech\demos\demo12\index.html
// http://localhost:3000/index.html
