let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let c = (prompt("Enter operator: "));

if(c == '+'){
    document.write("Sum : " + (a+b));
}
else if(c == '-'){
    document.write("Subtraction : " + (a-b));
}
else if(c == '*'){
    document.write("Multiplication : " + (a*b));
}
else if(c == '/'){
    document.write("Division : " + (a/b));
}
else{
    document.write("Valid Number !");
}