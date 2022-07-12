let a = parseInt(prompt("Enter any num:"));

for (let i = 1; i <= a; i++) {
    if(a % i == 0){
        document.write(i + "<hr>");
    }
    
}
