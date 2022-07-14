let uname = document.getElementById('name');


uname.addEventListener('blur', () => {
    let regex = /^[a-zA-z\s]{3,30}$/;

    if (regex.test(uname.value)) {
        uname.classList.remove('is-invalid');
    }
    else {
        uname.classList.add('is-invalid');
    }
});


let email = document.getElementById('email');

email.addEventListener('blur', () => {
    let regex = /^([a-zA-z0-9$%#@*\.]+)(@)([a-zA-z0-9$%#@*\.]+){1,5}([a-zA-z0-9$%#@*\.]+){1,10}$/;
    if (regex.test(email.value)) {
        email.classList.remove('is-invalid');
    }
    else {
        email.classList.add('is-invalid');
    }
});


let number = document.getElementById('number');

number.addEventListener('blur', () => {
    let regex = /^[0-9]{10}$/;
    if (regex.test(number.value)) {
        number.classList.remove('is-invalid');
    }
    else {
        number.classList.add('is-invalid');
    }
});


let password = document.getElementById('password');

password.addEventListener('blur', () => {
    let regex = /^([0-9A-Za-z&\^\$#@!%\*\.]){8}$/;
    if (regex.test(password.value)) {
        password.classList.remove('is-invalid');
    }
    else {
        password.classList.add('is-invalid');
    }
});

let check = document.getElementById('check');

let count = 0;
check.addEventListener('click', () => {
    if (count % 2 == 0) {
        password.type = 'text';
        count++;
    }
    else {
        password.type = 'password';
        count++;
    }
});

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let alert = document.getElementById('alert');
    if ((uname.classList.contains('is-invalid') || email.classList.contains('is-invalid') || number.classList.contains('is-invalid') || password.classList.contains('is-invalid')) ||
        (uname.value == "" || email.value == "" || number.value == "" || password.value == "")) {
        alert.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
        </svg>

        <div class="alert alert-danger d-flex alert-dismissible fade show align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <strong>Aleart ! :</strong>&ensp;Please Fill all the details Correctly.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `

        setTimeout(() => {
            alert.innerHTML = "";
        }, 4000);

    }
    else {
        alert.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
        </svg>

        <div class="alert alert-success d-flex alert-dismissible fade show align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <strong>Congratulations :</strong>&ensp;You Registered Successfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      `
        setTimeout(() => {
            alert.innerHTML = "";
            uname.value = "";
            number.value = "";
            email.value = "";
            password.value = "";
        }, 4000);

    }
});