let n = parseInt(prompt("Enter size of an array: "));
let a = new Array(n);

for (let i = 0; i < n; i++) {
    a[i] = (prompt("Enter  element : "));
}

a.sort();

a.forEach(element => {
    document.write(element + "<hr>");
});