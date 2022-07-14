function Book(name, author, type, prize) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.prize = prize;
}
function Display() {
    // let val = JSON.parse(localStorage.getItem('bookinfo'));
    // let book;
    // if (val == null) {
    //     book = "";
    // }
    // else {
    //     book = val;
    // }
}

Display.prototype.add = function (book) {
    let table = document.getElementById('table');
    let html = `   <tr id="tr">
                    <td class="table-dark">${book.name}</td>
                    <td class="table-dark">${book.author}</td>
                    <td class="table-dark">${book.type}</td>
                    <td class="table-dark">${book.prize}</td>
                </tr>`
    table.innerHTML += html;
    // localStorage.setItem('bookinfo', book);

}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.condition = function (book) {
    if (book.name.length >= 2 || book.author.length >= 2 || book.type.length >= 2) {
        return true;
    }

    else {
        return false;
    }
}

Display.prototype.alertMessage = function (type, msgtitle, msg) {
    let msgdiv = document.getElementById('msgdiv');
    msgdiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong> ${msgtitle}</strong> ${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

    setTimeout(function () {
        msgdiv.innerHTML = "";
    }, 3000);
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

    let display = new Display();
    if (display.condition(book)) {
        display.add(book);
        display.clear();
        display.alertMessage('success', 'Message:', 'Book has been added sucessfully');
    }
    else {
        display.alertMessage('danger', 'Alert:', `You can't add this book`);
    }
}