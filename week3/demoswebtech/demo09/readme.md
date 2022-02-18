<!-- what is anonymous function -->
function (n1,n2){
    return n1+n2;
}

SyntaxError: Function statements require a function name
To over come above problem we have Anonymous functions 
We creating anonymous function refer by a variable 
const add=function (n1,n2){
            return n1+n2;
            }
<!-- why  anonymous function -->
<!-- function which can be called only once when required -->
<!-- anonymous functions are best suited for callback  -->
http.createServer(onRequest)
function onRequest(req,resp){}
<!-- instead of two statements we can have one statement -->
const server=http.createServer(function(req,resp){
    resp.setHeader('CONTENT-TYPE','text/html');
    resp.write();
    resp.end();
});

//types : Echma 6
<!-- requestListener?: RequestListener below function accepts 
rquestlistener function with (req,resp) paramter -->
 function createServer(requestListener?: RequestListener): Server;