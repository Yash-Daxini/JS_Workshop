let n = parseInt(prompt("Enter any num:"));

let temp = n;
let arm = 0;
while(n != 0){
    arm += Math.pow(n % 10 , 3);
    n = parseInt(n / 10);    
}

if(arm == temp){
    document.write("Armstrong Number")
}
else{
    document.write("Not Armstrong Number")
}