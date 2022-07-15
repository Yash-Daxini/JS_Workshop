foodgenerator();
let img = document.getElementById('img');


uppper = 100;
left = 100;
// let x = 0;
// let y = 0;
let r;
let l;
let t;
let d;
let count = 0;

function match() {
    if ((left > x - 60 && left < x + 60) && (uppper > y - 60 && uppper < y + 60)) {
        foodgenerator();
        count++;
        if (count == 5) {
            clearInterval(l);
            clearInterval(d);
            clearInterval(t);
            clearInterval(d);
            main.innerHTML = "";
            main.innerHTML = `<h1 style="text-align:center ; color : white">Winner</br> ${count}</h1>`
        }
        let counter = document.getElementById('counter');
        counter.innerHTML = count;
    }
}

function foodgenerator() {
    x = parseInt(Math.random() * (screen.availWidth - 200));
    y = parseInt(Math.random() * (screen.availHeight - 200));
    let food = document.getElementById('food');
    food.style.width = '50px';
    food.style.left = x + "px";
    food.style.top = y + "px";
    // console.log(x + " " + y);

}

let right = document.getElementById('right');
let leftb = document.getElementById('leftb');
let up = document.getElementById('up');
let down = document.getElementById('down')

let main = document.getElementById('main')
// right.addEventListener('click', rightMove);
// clearInterval(l);

// leftb.addEventListener('click', leftMove);

// up.addEventListener('click', topMove);

// down.addEventListener('click', downMove);

document.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowLeft'){
        leftMove();
    }
    else if(event.key == 'ArrowRight'){
        rightMove();
    }
    else if(event.key == 'ArrowUp'){
        topMove();
    }
    else if(event.key == 'ArrowDown'){
        downMove();
    }
});



function rightMove() {
    clearInterval(l);
    clearInterval(d);
    clearInterval(t);
    clearInterval(r);
    r = setInterval(rightMoveInterval, 1);
}

function leftMove() {
    clearInterval(r);
    clearInterval(d);
    clearInterval(t);
    clearInterval(l);
    l = setInterval(leftMoveInterval, 1);
}

function topMove() {
    clearInterval(l);
    clearInterval(r);
    clearInterval(d);
    clearInterval(t);
    t = setInterval(topMoveInterval, 1);
}

function downMove() {
    clearInterval(l);
    clearInterval(r);
    clearInterval(t);
    clearInterval(d);
    d = setInterval(downMoveInterval, 1);
}

function rightMoveInterval() {
    img.style.transform =  "rotatey(180deg)";
    match();
    left++;
    if (left > screen.availWidth - 100) {
        clearInterval(r);
        main.innerHTML = "";
        main.innerHTML = `<h1 style="text-align:center ; color : white">Game Over </br> ${count}</h1>`
    }
    // console.log(left + " " + x + uppper + " " + y);
    img.style.left = left + "px";
}



function leftMoveInterval() {
    img.style.transform =  "rotatey(0deg)";
    match();
    left--;
    if (left <= 0) {
        clearInterval(l);
        main.innerHTML = "";
        main.innerHTML = `<h1 style="text-align:center ; color : white">Game Over </br> ${count}</h1>`
    }
    // console.log(left);
    img.style.left = left + "px";
}


function downMoveInterval() {
    img.style.transform =  "rotatez(45deg)";
    match();
    uppper++;
    if (uppper > screen.availHeight - 150) {
        clearInterval(d);
        main.innerHTML = "";
        main.innerHTML = `<h1 style="text-align:center ; color : white">Game Over </br> ${count}</h1>`
    }
    // console.log(uppper);
    img.style.top = uppper + "px";
}

function topMoveInterval() {
    img.style.transform =  "rotatez(90deg)";
    match();
    uppper--;
    if (uppper <= 0) {
        clearInterval(t);
        main.innerHTML = "";
        main.innerHTML = `<h1 style="text-align:center ; color : white">Game Over </br> ${count}</h1>`
    }
    // console.log(uppper);
    img.style.top = uppper + "px";
}


