/*
function Book(name, author, isRead = false) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

Book.prototype.getId = function(){
  return this.id;
};

Book.prototype.getName = function () {
  return this.name;
};

Book.prototype.setName = function (name) {
  this.name = name;
};

Book.prototype.getAuthor = function () {
  return this.author;
};

Book.prototype.setAuthor = function (author) {
  this.author = author;
};

Book.prototype.getIsRead = function () {
  return this.isRead;
};

Book.prototype.setIsRead = function (isRead) {
  this.isRead = isRead;
};

*/

class Book {
  #id;

  constructor(name, author, isRead = false) {
    this.#id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.isRead = isRead;
  }

  getId(){
    return this.#id;
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  getAuthor(){
    return this.author;
  }

  setAuthor(author){
    this.author = author;
  }

  getIsRead(){
    return this.isRead;
  }

  setIsRead(isRead){
    this.isRead = isRead;
  }
}

class BookHolder{
  constructor(){
    this.myLibrary = [];
  }

  addBookToLibrary(name, author, isRead){
    const book = new Book(name, author, isRead);
    this.myLibrary.push(book);
    return book;
  }

  displayBookList(){
    this.myLibrary.forEach((book, i) =>{
      console.log(
        `Book #${i + 1}: ${book.getName()} by ${book.getAuthor()} - ${
          book.getIsRead() ? "Read" : "Not Read"}`
      );
    });
  }

  removeBookById(bookId){
    this.myLibrary = this.myLibrary.filter((book) => book.getId() !== bookId);
  }
}

const bookHolder = new BookHolder();


/*
function BookHolder() {
  this.myLibrary = [];
}


BookHolder.prototype.addBookToLibrary = function (name, author, isRead) {
  const book = new Book(name, author, isRead);
  this.myLibrary.push(book);
  return book;
};

BookHolder.prototype.displayBookList = function () {
  this.myLibrary.forEach((book, i) => {
    console.log(
      `Book #${i + 1}: ${book.getName()} by ${book.getAuthor()} - ${
        book.getIsRead() ? "Read" : "Not Read"
      }`
    );
  });
};

*/


function insertRow(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = bookHolder.addBookToLibrary(name, author, isRead);

  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.setAttribute("data-id", newBook.getId());

  const nameCell = newRow.insertCell(0);
  const authorCell = newRow.insertCell(1);
  const readStatusCell = newRow.insertCell(2);
  const actionCell = newRow.insertCell(3);

  nameCell.innerText = newBook.getName();
  authorCell.innerText = newBook.getAuthor();

  readStatusCell.innerText = newBook.getIsRead() ? "Read" : "Not Read";
  readStatusCell.style.color = newBook.getIsRead() ? "green" : "red";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    const bookId = parseInt(newBook.getAttribute("data-id"));
    bookHolder.removeBookById(bookId);
    table.deleteRow(newRow.rowIndex);
  };
  actionCell.appendChild(deleteBtn);
  closeForm();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  const popup = document.getElementById("myForm");
  popup.style.display = "none";

  const form = popup.querySelector("form");
  if (form) {
    form.reset();
  }
}
