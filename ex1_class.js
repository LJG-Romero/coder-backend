function ejemplo(a,b) {
    console.log("hola nuevamente");
}
ejemplo();

class User {
    constructor (name, lastname, books, pets){
        this.name = name;
        this.lastname = lastname;
        this.books = [];
        this.pets = [];
    }
    getFullName(){
        console.log(`User's name: ${this.lastname},${this.name}`);
    }
    addPet(){
        // this.pets.push(prompt("Add up your pet's name: "));
        console.log("User's pet name: ")
        for (this.pet of this.pets) {
            console.log(`Pet${this.pets.indexOf(this.pet)} name: ${this.pet}\n`)  
        }
    }
    countPets(){
        let numPets = this.pets.length;
        console.log(numPets);
    }
    addBook(){
        let bookName = prompt(`Add up a new book name: `);
        let bookAuthor = prompt(`Add up a new book author: `);
        let newBook = {
            book_Name: bookName,
            book_Author: bookAuthor
        }
        this.books.push(newBook);
    }
    getBookNames(){
        // let bookNameAnswer = [];
        // for (label of this.books) {
        //     bookNameAnswer.push(label);
        // }
        // console.log(bookNameAnswer);

        console.log(`Your library is compound by the following names: `)
        for (this.label of this.books) {
            console.log(` ${this.label.book_Name} \n `)
        }
    }
}

let foo = new User("Lucas", "Romero");
foo.getFullName();

foo.pets.push("Lian");
foo.addPet();

foo.countPets();

// foo.addBook();
foo.books.push(
    {
        book_Name: "El Principito",
        book_Author: "Antoine de Saint-Exupéry"
    }
);

foo.getBookNames();