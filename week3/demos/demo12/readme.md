Website -> homepate / index /landing 
www.masteknet.com -> login-> home page
const http=require('http');
const fs=require('fs');
const port=3000;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    // resp.write("<!DOCTYPE html>");
    // resp.write("<html>");
    // resp.write("<body>");
    // resp.write("<ol>  ");
    // resp.write(" <li>HTML</li>  ");
    // resp.write(" <li>Java</li>  ");
    // resp.write(" <li>JavaScript</li>");  
    // resp.write(" <li>SQL</li>  ");
    // resp.write("</ol>  ");
    // resp.write("</body>");
    // resp.write("</html>");
    resp.end();
}).listen(port,()=>{
    console.log(`http://localhost:${port} started`);
});

functionname
anonymous 
()=>{}