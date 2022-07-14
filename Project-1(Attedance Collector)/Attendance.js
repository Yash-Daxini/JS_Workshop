let atten = document.getElementById('atten');
showTabel();

let checks = document.getElementById('checks');

let submitBtn = document.getElementById('submitBtn');

let className = document.getElementById('className');

let html = "";

for (i = 1; i <= 58; i++) {
    if (i >= 1 && i < 10) {
        i = "0" + i;
    }
    html += `<b>${i}</b>`;
    html += `<input type="checkbox" class="checkboxes" onClick="Clicked()">`
    if (i % 10 == 0) {
        html += `</br></br>`;
    }
}
checks.innerHTML += html;


let a = new Array();

let checkboxes = document.getElementsByClassName('checkboxes');

function Clicked() {
    Array.from(checkboxes).forEach((element, index) => {
        if (element.checked && !(a.includes(index + 1))) {
            a.push(index + 1);
        }
    });
}

//EventListener On submit button and add the detail in table

let arr = [];
flag = false;

submitBtn.addEventListener('click', () => {
    let attendance = "";

    let ans = localStorage.getItem('tableData');

    if (ans == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(ans);
    }


    a.forEach(element => {
        attendance += element;
        attendance += "&ensp;";
    });

    let d = new Date();

    if (attendance == "") {
        attendance = "All present";
    }

    let obj = {
        date: `${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}`,
        string: attendance,
        classname: className.value
    }

    arr.push(obj);
    console.log(arr);

    localStorage.setItem("tableData", JSON.stringify(arr));

    let ansarr = JSON.parse(localStorage.getItem("tableData"));
    Array.from(ansarr).forEach(element => {
        console.log(element);
    });


    Array.from(checkboxes).forEach((element, index) => {
        element.checked = false;
    });

    className.value = "";
    attendance = "";
    a = [];

    showTabel();

});


// show table function which shows table

function showTabel() {

    flga = true;
    let table = document.getElementById('table');

    let ans = JSON.parse(localStorage.getItem("tableData"));


    let str = "";

    let ele = document.createElement('h1');
    ele.setAttribute('id', 'h1');
    if (ans == null) {
        ele.innerHTML += "Enter Date , Absent Number and Class Name.";
        atten.appendChild(ele);
    }
    else {
        table.innerHTML = `<thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Absent Numbers</th>
            <th scope="col">Class</th>
        </tr>
    </thead>`;
        Array.from(ans).forEach(element => {
            str += `
        <tbody>
            <tr>
                <td>${element.date}</td>
                <td>${element.string}</td>
                <td>${element.classname}</td>
            </tr>
        </tbody>`;
        });
        table.innerHTML += str;
    }
}


let resetBtn = document.getElementById('resetBtn');

// EventListener on reset button

resetBtn.addEventListener('click', () => {
    table.innerHTML = "";
    table.innerHTML += `<thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Absent Numbers</th>
                                <th scope="col">Class</th>
                            </tr>
                        </thead>`;
    let h1 = document.createElement('h1');
    h1.innerHTML += "Enter Date , Absent Number and Class Name.";
    atten.appendChild(h1);
    localStorage.clear();
});
