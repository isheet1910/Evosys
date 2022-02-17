//creae object to store Product details such as pid,pname,unitprice
// First using new object 
const product = new Object();
product.pid = 101;
product.pname = "laptop";
product.unit_price = 60000;

product.details = function() {
    return this.pid + " " + this.pname + " " + this.unit_price;
}
console.log("product Deatils :" + product.pid + " " + product.pname + " " + product.unit_price);
console.log("product Deatils :" + product.details());

function Product(pid, pname, unit_price) {
    this.pid = pid;
    this.pname = pname;
    this.unit_price = unit_price;
    this.details = function() {
        return this.pid + " " + this.pname + " " + this.unit_price;
    }
};
const p1 = new Product(1, "mobiles", 4500);
console.log("product details : " + p1.details());
const p2 = {
    "pid": 2,
    "pname": "iphone",
    "unit_price": 59000,
    "details": function() {
        return this.pid + " " + this.pname + " " + this.unit_price;
    }
};
console.log("product details : " + p2.details());