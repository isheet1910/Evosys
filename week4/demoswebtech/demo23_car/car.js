import { builtinModules } from "module";

class Car {
    constructor(brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

//const book1 = new Book("Book1", "Author1", "1234");
//console.log(book1);

export default Car;