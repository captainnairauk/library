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

function BookHolder() {
  this.myLibrary = [];
}

const bookHolder = new BookHolder();


BookHolder.prototype.addBookToLibrary = function (name, author, isRead) {
  const book = new Book(name, author, isRead);
  this.myLibrary.push(book);
  return book;
};

BookHolder.prototype.displayBookList = function () {
  this.myLibrary.forEach((book, i) =>{
    console.log(
      `Book #${i+1}: ${book.getName()} by ${book.getAuthor()} - ${book.getIsRead() ? "Read" : "Not Read"}`
    );
  });
};

function insertRow(event){
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = bookHolder.addBookToLibrary(name, author, isRead);

  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.setAttribute("data-id", newBook.getId());

  const nameCell = newRow.insertCell(0);
  const authorCell = newRow.insertCell(1);
  const readStatusCell = newRow.insertCell(2);
  const actionCell = newRow.insertCell(3);

  nameCell.innerText = newBook.getName();
  authorCell.innerText = newBook.getAuthor();

  readStatusCell.innerText = isRead ? "Read" : "Not Read";
  readStatusCell.style.color = isRead ? "green" : "red";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function(){
    table.deleteRow(newRow.rowIndex - 1);
    bookHolder.myLibrary = bookHolder.myLibrary.filter(book => book.getId() !== newBook.getId());
  };
  actionCell.appendChild(deleteBtn);
  closeForm();
}



function openForm(){
  document.getElementById("myForm").style.display = "block";
};

function closeForm(){
  const popup = document.getElementById("myForm");
  popup.style.display = "none";
  
  const form = popup.querySelector("form");
  if(form){
    form.reset();
  }
};
