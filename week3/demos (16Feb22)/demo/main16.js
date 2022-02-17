//###demo16
//main.js
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.details = () => { return this.firstName + " " + this.lastName };
}
const p1 = new Person("Isheet", "Shetty");
const p2 = new Person("Sweta", "Gupta");
const p3 = new Person("Yash", "Jobalia");

const People = [p1, p2, p3];

for (let i in People) {
    console.log(People[i].details());
}