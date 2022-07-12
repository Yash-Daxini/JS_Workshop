let n = parseInt(prompt("Enter any num:"));

let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}

document.write("Factorial : " + fact);
