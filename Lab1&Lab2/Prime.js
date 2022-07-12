let n = parseInt(prompt("Enter any num:"));

let flag = false;
for (let i = 2; i*i <= n; i++) {
    if(n % i == 0){
        flag = true;
    }
}
if (!flag) {
    document.write("Prime");
}
else{
    document.write("Not Prime");
}
