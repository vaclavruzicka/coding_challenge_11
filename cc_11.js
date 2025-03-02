//Task 1 - Creating a Book Class

//Creating a class called book that uses the constructor method.
class Book {
    constructor (title, author, isbn, copies) {
        this.title = title //Sources title in the instance.
        this.author = author //Sources author in the instance.
        this.isbn = isbn //Sources isbn in the instance.
        this.copies = copies //Sources copies in the instnace.
    }

    //Creating a method that retrieves the details of a book and returns it using a template literal.
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }

    //Creating a method that updates the copies avilable when a book is checked out or returned.
    updateCopies(quantity) {
        this.copies += quantity //Adds the quantity to the copies to allow for a negative number to represent a check out and a positive number to represent a return.
    }
}

//Creating a new book using the consstructor.
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5)

//Logging the new book's details using getDetails.
console.log(book1.getDetails())

//Updating the copies by representing someone checking out a copy.
book1.updateCopies(-1)

//Logging the updated details after the check out.
console.log(book1.getDetails())

//Task 2 - Creating a Borrower Class

//Creating a class named Borrower using the constructor method.
class Borrower {
    constructor (name, borrowerID,) {
        this.name = name //Sources name in the instance.
        this.borrowerID = borrowerID //Sources the borrower ID in the instance.
        this.borrowedBooks = [] //Sets up an empty array for the borrowed books.
    }

    //Creating a method that adds a book title to the borrowed book array using push.
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }

    //Creating a method that removes a book title from the borrowed book array using filter.
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(bk => bk !== book)
    }
}

//Creating a new borrower using the contructor.
const borrower1 = new Borrower("Alice Johnson", 201)

//Adding the Great Gatsby to the borrowed book array.
borrower1.borrowBook("The Great Gatsby")

//Logging the updated array.
console.log(borrower1.borrowedBooks)

//Removing the Great Gatsby from the borrowed book array.
borrower1.returnBook("The Great Gatsby")

//Loggine the updated array.
console.log(borrower1.borrowedBooks)

//Task 3 - Creating a Library Class

//Creating a class named Library using the constructor method.
class Library {
    constructor () {
    this.books = [] //Sets an empty array for books to be input in.
    this.borrowers = [] //Sets an empty array for borrowers to be input in.
    }

    //Creating a method that adds preexisting books to the library's array using push.
    addBook(book) {
        this.books.push(book)
    }

    //Creating a method that lists the details of each book in the array using For Each.
    listBooks() {
       this.books.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Copies: ${book.copies}`))
    
    }
    
    //Task 4 - Implementing Book Borrowing

    //Created a method that adds a borrower to the  library's borrower array based.
    addBorrower(borrower) {
        this.borrowers.push(borrower)
    }
    
    //Created a method that finds a book and a borrower based on their isbn and borrowerID.
    //It then makes sure both of these exist and that the copies of the book is greater than zero.
    //Finally, if all of these conditions are met, then it reduces the book copies by one and then adds the book title to the borrower's borrowed book array.
    lendBook(borrowerID, isbn) {
        const book = this.books.find(bk => bk.isbn === isbn)
        const borrower = this.borrowers.find(br => br.borrowerID === borrowerID)

        if (!book || book.copies <= 0 || !borrower) {
            return `No more copies available.`
        } else {
            book.copies -= 1
            borrower.borrowBook(book.title)
        }
    }

    //Task 5 - Implementing Book Returns

    //Creating a method that finds a book and a borrower based on their ISBN and borrowerID.
    //It them makes sure both of them exist.
    //Finally, if both of these conditions are met, it increases the book copies by one and removes the book title from the borrower's borrowed book array.
    returnBoook(borrowerID, isbn) {
        const book = this.books.find(bk => bk.isbn === isbn)
        const borrower = this.borrowers.find(br => br.borrowerID === borrowerID)

        if (!book || !borrowerID) {
            return `No checked out books find.`
        } else {
            book.copies += 1
            borrower.returnBook(book.title)
        }
    }
}

//Task 3 - Creating a Library Class

//Creating a new library using the constructor.
const library = new Library()

//Adding a prexisting book to the library.
library.addBook(book1)

//Returing the details of the library's book array.
library.listBooks()

//Task 4 - Implementing Book Borrowing

//Adding the pre-existing borrower to the library's borrower array.
library.addBorrower(borrower1)

//Lending the book to the borrower based on the borrower ID and the ISBN
library.lendBook(201, 123456)

//Logging the books details to make sure the copies decreased.
console.log(book1.getDetails())

//Logging the borrower's borrowed books to make sure the array updated.
console.log(borrower1.borrowedBooks)

//Task 5 - Implementing Book Returns

//Retruning the book to the library from the borrower.
library.returnBoook(201, 123456)

//Logging the books details after the return.
console.log(book1.getDetails())

//Logging the borrower's updated borrowed books array.
console.log(borrower1.borrowedBooks)