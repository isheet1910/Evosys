v1 = 10000;
//	10000
console.log(v1)
    //	VM700:1 10000
    //	undefined
function f1() {
    console.log("v1" + v1);
    v1 = v1 + 1000;
    console.log("after v1=v1+1000 =" + v1);
}
//	undefined
console.log("Before f1()" + v1);
//	VM1220:1 Before f1()10000
//	undefined
f1();
//	VM1086:2 v110000
//	VM1086:4 after v1=v1+1000 =11000
//	undefined
console.log("Before f1()" + v1);
//	VM1256:1 Before f1()11000
//	undefined