//main.js
//JSON
const p1 = { "firstName": "Isheet", "lastName": "S", "details": function() { return this.firstName + " " + this.lastName } };
const p2 = { "firstName": "Shweta", "lastName": "G", "details": function() { return this.firstName + " " + this.lastName } };
const p3 = { "firstName": "Yash", "lastName": "J", "details": function() { return this.firstName + " " + this.lastName } };

const people = [p1, p2, p3]

for (let i in people) {
    console.log(people[i].details());
}