let selectedRow = null

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


document.querySelector("#addBook").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});


const addBookToLibrary = () => {

    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        didYouread: document.getElementById("readOrNot").checked
    }

    const libBooks = new Book(book["title"], book["author"], book["pages"], book["didYouread"]); 
    console.log(libBooks.info());
    console.log(document.getElementById("readOrNot").checked);
    document.forms[0].reset();
    selectedRow = null;

    if (selectedRow == null){
        insertNewRecord(libBooks);

    } else{
        updateRecord(libBooks)
    }

}

function insertNewRecord(data){
    let table = document.getElementById("bookList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pages;
    cell4 = newRow.insertCell(3);
    cell4.textContent = data.read;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick= "onEdit(this)" href="#">Edit</a>
                       <a onClick= "onDelete(this)" href="#">Delete</a>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pages").value = selectedRow.cells[2].innerHTML;
    document.getElementById("readOrNot").value = selectedRow.cells[3].innerHTML;
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("bookList").deleteRow(row.rowIndex);
    document.forms[0].reset();
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.pages;
    selectedRow.cells[3].innerHTML = formData.didYouread;
    
}
