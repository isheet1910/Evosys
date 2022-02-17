// Function passed as parameter has parameters 
function add(num1,num2){
    console.log("function add is called ");
    console.log("It will return addition of %d and %d",num1,num2);
    console.log(num1+num2);
}

function calc(doSomething){
    console.log("Calc function is called!");
    const n1=1000;
    const n2=2000;
    doSomething(n1,n2);
}
console.log("// Function passed as parameter has parameters ");
calc(add);

function f1(){
    console.log("f1() Has no parameters does some opreations ");
}

function calling1(doSomething){
    console.log("calling1() called which accepts function without parameter");
    doSomething();
}

function calling2(doSomething){
    console.log("calling2() called which accepts function with single parameter");
    doSomething("Welcome to parameterised function");
}
console.log("calling1() is called ");
calling1(f1);
calling2(f1);