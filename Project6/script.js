let btn = document.querySelectorAll('button');
let display = document.getElementById('display');

let str = "";
for (const element of btn) {
    element.addEventListener('click', () => {

        if (element.innerText == 'X') {
            element.innerText = '*'
            str += element.innerText;
            display.value = str;
        }
        else if(element.innerText == '<-'){
            str = str.slice(0,str.length-1);
            display.value = str;
        }
        else if(element.innerText == '='){
            display.value = eval(str);
            str = display.value;
            
        }
        else if(element.innerText == 'C'){
            str = "";
            display.value = str;
        }
        else if(element.innerText == 'D'){
            let body = document.querySelector('body');
            body.classList.add('bodyb');
        }
        else{
            str += element.innerText;
            display.value = str;
        }
    })
}

