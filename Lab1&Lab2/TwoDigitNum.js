let n = parseInt(prompt("Enter any two digit:"));

let power = n % 10;
n = parseInt(n/10);
let base = n;

document.write(parseInt(Math.pow(base,power)));
