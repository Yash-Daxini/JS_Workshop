function gcd(a,b) {
    if(b == 0){
        document.write(a);
    }
    gcd(b,a%b);
}

let x = parseInt(prompt("Enter any num1:"));
let y = parseInt(prompt("Enter any num2:"));

gcd(x,y);