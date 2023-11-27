class Book{
    constructor(title,author,isbn,statut){
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._statut = statut;
    }
    //Getter Syntaxe
    get title(){
        return this._title;
    }
    //Setter Syntaxe
    set title($Title){
        this._title = $Title;
    }

    get author(){
        return this.author;
    }

    set author($author){
        this._title = $author;
    }

    get isbn(){
        return this.isbn;
    }

    set isbn($isbn){
        this._title = $isbn;
    }

    get statut(){
        return this.statut;
    }

    set statut($statut){
        this._title = $statut;
    }

    afficheDetails(){
        console.log(`title: ${this._title}, Author: ${this._author}, isbn: ${this._isbn}, statut: ${this._statut}`)
    }
}

let book = new Book("Algorithme","Enshtein","Scientifiques");
book.title = "Algorithme";
console.log(book.title);



class Person{
    constructor(name,dateofbirth){
        this.name = name;
        this.dateofbirth = dateofbirth;
    }

    get name(){
        return this.name;
    }

    set name($name){
        this._title = $name;
    }

    get dateofbirth(){
        return this.dateofbirth;
    }

    set dateofbirth($dateofbirth){
        this._title = $dateofbirth;
    }
}

class Author extends Person{
    constructor(name,dateofbirth){
        super(name,dateofbirth);
        this._listofbooks = []
    }
    
    get listBooks(){
        return this.listBooks;
    }

    set listBooks($listBooks){
        this._title = $listBooks;
    }

    AddBook(listofbooks){
        this._listofbooks.push(listofbooks);
    }

}



// class User{
//     constructor(id,name){
//      this._id = id;
//      this._name = name;
//     }

//     get id(){
//         return this._id;
//     }
//     set id($id){
//         this._id = $id;
//     }

//     get name(){
//         return this._name;
//     }
//     set name($name){
//         this._name = $name;
//     }
// }


// class Member extends User{
//     constructor(id,name){
//         super(id,name);
//         this._borrowBook = [];
//     }
//     Borrowbook (book){
//         this._borrowBook.push(book);
//         console.log(`${this.name} has borrowed ${book.title}.`);
//     }
//     returnBook(book) {
//         const index = this.borrowBook.indexOf(book);
//         if (index !== -1) {
//             this.borrowBook.splice(index, 1);
//             console.log(`${this.name} has returned ${book.title}.`);
//         } else {
//             console.log(`${this.name} does not have ${book.title} borrowed.`);
//         }
//     }
// }
// let user1 = new User(1, "John Doe");
// book.title = "Algorithme";
// user1.id = 1;
// user1.name = "othmane";
// console.log(book.title);
// console.log(user1.id);
// console.log(user1.name);
// user1.Borrowbook;
class User {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

class Member extends User {
    constructor(id, name) {
        super(id, name);
        this._borrowedBooks = [];
    }

    borrowBook(book) {
        this._borrowedBooks.push(book);
        console.log(`${this.name} has borrowed ${book.title}.`);
    }

    returnBook(book) {
        const index = this._borrowedBooks.indexOf(book);
        if (index !== -1) {
            this._borrowedBooks.splice(index, 1);
            console.log(`${this.name} has returned ${book.title}.`);
        } else {
            console.log(`${this.name} does not have ${book.title} borrowed.`);
        }
    }
}



// Example usage
const user1 = new User(1, "John Doe");
const member1 = new Member(2, "Alice Smith");

user1.id = 1;
user1.name = "Othmane";

console.log(user1.id);
console.log(user1.name);

member1.borrowBook(book);
member1.returnBook(book);


class Librarian extends User {
    constructor(id, name) {
        super(id, name);
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`${this.name} has added ${book.title} to the library.`);
    }

    checkBookStatus(book) {
        return this.books.includes(book);
    }
}
// Example usage
const librarian1 = new Librarian(1, "Alice Librarian");
const book1 = new Book("Algorithme", "Enshtein", "Scientifiques");

librarian1.addBook(book1);
console.log(librarian1.checkBookStatus(book1));

class Library{
      constructor(){

      } 
}
