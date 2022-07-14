let btn = document.querySelectorAll('.btn');
let display = document.getElementById('text');

let str = "";
for (const element of btn) {
    element.addEventListener('click', () => {

        if (element.innerText == 'X') {
            element.innerText = '*'
            str += element.innerText;
            display.value = str;
        }
        else if(element.innerText == '⟵'){
            str = str.slice(0,str.length-1);
            display.value = str;
        }
        else if(element.innerText == '='){
            display.value = eval(str).toFixed(8);
            str = display.value;
            
        }
        else if(element.innerText == 'C'){
            str = "";
            display.value = str;
        }
        else if(element.innerText == 'D'){
            let body = document.querySelector('body');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            Array.from(btn).forEach(element => {
              element.classList.add('btn-outline-warning');
              element.classList.remove('btn-outline-primary');
            });
            element.innerText = 'L';
        }
        else if(element.innerText == 'L'){
            let body = document.querySelector('body');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            Array.from(btn).forEach(element => {
              element.classList.remove('btn-outline-warning');
              element.classList.add('btn-outline-primary');
            });
            element.innerText = 'D';
        }
        else{
            str += element.innerText;
            display.value = str;
        }
    })
}

