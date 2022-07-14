console.log('Clock');

let clock = document.getElementById('clock');

let str = "";

setInterval(() => {
    const date = new Date();
    str = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    clock.innerHTML = str;
}, 1000);

