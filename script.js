let myLibrary = [];

function Book(title, author, pages, didYouread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = didYouread;
    this.info = function () {
        if (didYouread === "false") {
            return `${title} by ${author}, ${pages} pages, not read yet.`
        }
        else if (didYouread === "true") {
            return `${title} by ${author}, ${pages} pages, read yet.`
        } else {
            return "Enter the correct spelling."
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", true);

function addBookToLibrary() {
    const title = prompt("Enter the title");
    const titleString = title.toString();

    const author = prompt("Enter the name of the author");
    const authorString = author.toString();

    const pages = prompt("Enter the number of pages");
    const pagesString = pages.toString();

    const didYouread = prompt("Answer in true or false");
    const didYoureadString = didYouread.toLowerCase();

    const book = new Book(titleString, authorString, pagesString, didYoureadString);
    console.log(book.info());
    myLibrary.push(book);
    console.log(myLibrary);
}

addBookToLibrary();