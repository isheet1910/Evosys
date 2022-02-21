class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const book1 = new Book('Book1', 'Author1', '12345');

console.log(book1);