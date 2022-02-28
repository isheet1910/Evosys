import { builtinModules } from "module";

class Person {
    constructor(fname, lname, gender){
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
    }
}

//const book1 = new Book("Book1", "Author1", "1234");
//console.log(book1);

export default Person;