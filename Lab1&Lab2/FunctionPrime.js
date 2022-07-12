let n = parseInt(prompt("Enter any number:"));

flag = true;

prime(n);

function prime(n) {
    for( i = 2 ; i *i <= n ; i++){
        if(n % i == 0){
            flag = false;
        }
    }
    if(flag){
        document.write("Prime")
    }
    else{
        document.write("Not Prime")
    }
}