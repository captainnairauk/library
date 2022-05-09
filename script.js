let myLibrary = [];

function Book(title, author, pages, didYouread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = didYouread;
    this.info = function () {
        if (didYouread === false) {
            return `${title} by ${author}, ${pages} pages, has not been read yet.`
        }
        else {
            return `${title} by ${author}, ${pages} pages, has been read.`
        }
    }
}

// function addBookToLibrary() {
//     const title = prompt("Enter the title");
//     const titleString = title.toString();

//     const author = prompt("Enter the name of the author");
//     const authorString = author.toString();

//     const pages = prompt("Enter the number of pages");
//     const pagesString = pages.toString();

//     const didYouread = prompt("Answer in true or false");
//     const didYoureadString = didYouread.toLowerCase();

//     const book = new Book(titleString, authorString, pagesString, didYoureadString);
//     console.log(book.info());
//     myLibrary.push(book);
//     console.log(myLibrary);
//     addBookToLibrary();
// }

// addBookToLibrary();

document.querySelector("#addBook").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

const addBookToLibrary = (event) =>{
    event.preventDefault();
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        didYouread: document.getElementById("readOrNot").checked
    }

    const libBooks = new Book(book["title"],book["author"],book["pages"],book["didYouread"]);
    console.log(libBooks.info());
    console.log(document.getElementById("readOrNot").value);
    myLibrary.push(libBooks);
    document.forms[0].reset();

    console.warn("added", {myLibrary});
}

document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("submitBtn").addEventListener("click",addBookToLibrary);
});
