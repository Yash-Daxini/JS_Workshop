let n = parseInt(prompt("Enter any num1:"));

let temp = n;
let rev = 0;
while(n != 0){
    rev = rev * 10 + n % 10;
    n = parseInt(n / 10);
}

if(rev == temp){
    document.write("Palindrome");
}
else{
    document.write("Not Palindrome");
}