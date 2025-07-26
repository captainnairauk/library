function BookHolder() {
  this.myLibrary = [];
}

const bookHolder = new BookHolder();

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

BookHolder.prototype.addBookToLibrary = function (name, author, isRead) {
  const book = new Book(name, author, isRead);
  bookHolder.row.push(book);
};

BookHolder.prototype.displayBookList = function () {
  let n = bookHolder.myLibrary.length;
  for (let i = 0; i < n; i++) {
    let isRead = bookHolder.myLibrary[i].getIsRead();
    
    console.log(
      `Book number: ${i}, This is ${bookHolder.myLibrary[i].getName()}. I have ${
        isRead ? "read" : "not read"
      } this book.`
    );
  }
};


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

