const myLibrary = [];

function Book(name, author, isRead = false) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

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
  this.row = [];
}

const bookHolder = new BookHolder();

BookHolder.prototype.addBookToLibrary = function (name, author, isRead) {
  const book = new Book(name, author, isRead);
  bookHolder.row.push(book);
};

BookHolder.prototype.displayBookList = function () {
  let n = bookHolder.row.length;
  for (let i = 0; i < n; i++) {
    let isRead = bookHolder.row[i].getIsRead();
    
    console.log(
      `Book number: ${i}, This is ${bookHolder.row[i].getName()}. I have ${
        isRead ? "read" : "not read"
      } this book.`
    );
  }
};
