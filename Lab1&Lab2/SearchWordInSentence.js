let n = parseInt(prompt("Enter size of Array:"))

let a = new Array(n);

for (let i = 0; i < a.length; i++) {
    a[i] = (prompt("Enter String element " + (i+1) + "of Array:"));
}

let word = prompt("Enter word you want to search in array: ");

a.forEach(element => {
    document.write(element.indexOf(word,0) + "<hr>");
    // while (index != -1) {
    //     document.write(index);
    //     index = element.indexOf(word,index+1);
    // }
});