let str = prompt("Enter String:");

let first = str.indexOf('a');
let last = str.lastIndexOf('a');

document.write("First Occurence : " + first + "</br>");
document.write("Last Occurence : " + last + "</br>");
document.write(str.substring(first + 1,last));