// declaration of anonymous function refer by const variable
const add=function (n1,n2){
    return n1+n2;
}
// using ref variable we are calling the anonymous function
const n1=100; 
const n2=300;
const result=add(n1,n2);
console.log(n1+"+"+n2+" = "+result);

function calc(callBackFunction,n1,n2){
    console.log("n1 ="+n1)
    console.log("n2 ="+n2)
    console.log("calc called ");
    if(callBackFunction!=null || callBackFunction!=undefined){
        if(n1!=null && n2!=null)
            console.log(callBackFunction(n1,n2));
        else     
            console.log(callBackFunction(0,0));
    }
    else{
        console.log("Plealse provide call back function");
    }
        
}
console.log("function(n1,n2){ return n1-n2}");
calc(function(n1,n2){ return n1-n2},n1,n2); //nan
console.log("add");
calc(add,n1,n2); //nan
console.log("calc()");
calc();
