let n1 = parseInt(prompt("Enter any num1:"));
let n2 = parseInt(prompt("Enter any num2:"));

let flag = false;
for (let i = n1; i <= n2; i++) {
    flag = false;
    for (let j = 2; j * j <= i; j++) {
        if(i % j == 0){
            flag = true;
        }
    }
    if (!flag && i != 1) {
        document.write( i + "<hr>");
    }
}
