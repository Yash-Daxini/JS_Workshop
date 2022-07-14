
class Book {
    constructor(name, author, type, prize) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.prize = prize;
    }

    add(book) {
        // showbook();
        let table = document.getElementById('table');
        let html = `   <tr id="tr">
                    <td class="table-dark">${book.name}</td>
                    <td class="table-dark">${book.author}</td>
                    <td class="table-dark">${book.type}</td>
                    <td class="table-dark">${book.prize}</td>
                    <td><button type="button" id="deleteBtn" class="btn btn-outline-danger">Delete Book</button></td>
                </tr>`
        table.innerHTML += html;
    //     let table = document.getElementById('table');
    // let bookObj = JSON.parse(localStorage.getItem("bookObj"));
    // if (bookObj == null) {
    //     let h1 = document.createElement('h1');
    //     let text = document.createTextNode('No Data found');
    //     h1.appendChild(text);
    //     output.appendChild(h1);
    // }
    // else {
    // let html;
    // Array.from(bookObj).forEach(function(element) {
    //     console.log(element)
    //      html = `   <tr id="tr">
    //                 <td class="table-dark">${element.name}</td>
    //                 <td class="table-dark">${element.author}</td>
    //                 <td class="table-dark">${element.type}</td>
    //                 <td class="table-dark">${element.prize}</td>
    //                 <td><button type="button" id="deleteBtn" class="btn btn-outline-danger">Delete Book</button></td>
    //             </tr>`
    //     table.innerHTML += html;
    // });
    // }
}

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    condition(book) {
        if (book.name.length > 1 || book.author.length > 1 || book.type.length > 1) {
            return true;
        }

        else {
            return false;
        }
    }

    alertMessage(type, msgtitle, msg) {
        let msgdiv = document.getElementById('msgdiv');
        msgdiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong> ${msgtitle}</strong> ${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

        setTimeout(function () {
            msgdiv.innerHTML = "";
        }, 3000);
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', submit);

function submit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type = document.getElementById('bookType').value;
    let prize1 = document.getElementById('prize1');
    let prize2 = document.getElementById('prize2');
    let prize3 = document.getElementById('prize3');
    let prize;

    if (prize1.checked) {
        prize = prize1.value;
    }
    else if (prize2.checked) {
        prize = prize2.value;
    }
    else if (prize3.checked) {
        prize = prize3.value;
    }
    let book = new Book(name, author, type, prize);
    let arr = [];
    arr.push(book);
    localStorage.setItem('bookObj', JSON.stringify(arr));
    console.log(arr);
    if (book.condition(book)) {
        book.add(book);
        book.clear();
        book.alertMessage('success', 'Message:', 'Book has been added sucessfully');
    }
    else {
        book.alertMessage('danger', 'Alert:', `You can't add this book`);
    }
}

let deleteBtn = document.getElementById('deleteBtn');
// deleteBtn.addEventListener('click',deletebook);

function deletebook(){
    console.log("Clicked");
}
