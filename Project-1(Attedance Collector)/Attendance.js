let checks = document.getElementById('checks');

let html = "";

for (i = 1; i <= 58; i++) {
    if (i >= 1 && i < 10) {
        i = "0" + i;
    }
    html += `<b>${i}</b>`;
    html += `<input type="checkbox" class="checkboxes" onClick="Clicked()">`
    if (i % 10 == 0) {
        html += `</br></br></br></br>`;
    }
}

checks.innerHTML += html;

let a = new Array();


let checkboxes = document.getElementsByClassName('checkboxes');
function Clicked() {
    Array.from(checkboxes).forEach((element, index) => {
        if (element.checked && !(a.includes(index+1)) && element != 0) {
            a.push(index + 1);
        }
    });
    }

let submitBtn = document.getElementById('submitBtn');

let className = document.getElementById('className');

let atten = document.getElementById('atten');

let arr = new Array();
submitBtn.addEventListener('click', () => {
    let html2 = "";

    a.forEach(element => {
        html2 += element;
        html2 += "&ensp;";
    });

    let d = new Date();

    let obj = {
        date : `${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}` ,
        string : html2,
        classname : className.value
    }


    arr.push(obj);

    localStorage.setItem("tableData",JSON.stringify(arr));

    Array.from(checkboxes).forEach((element, index) => {
        element.checked = false;
    });
    className.value = "";    

    showTabel();
    
});

function showTabel() {
    
    let table = document.getElementById('table');

    let ans = JSON.parse(localStorage.getItem("tableData"));

    let str = "";

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


let resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    atten.innerHTML = "";
});
