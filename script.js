const form = document.getElementById('form');
const password1Ele = document.getElementById('password1');
const password2Ele = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constaint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Check to see if password match
    if (password1Ele.value === password2Ele.value) {
        passwordsMatch = true;
        password1Ele.style.borderColor = 'green';
        password2Ele.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.borderColor = 'red';
        messageContainer.style.color = 'red';
        password1Ele.style.borderColor = 'red';
        password2Ele.style.borderColor = 'red';
        return;
    }
    // If form is valid and password match
    if (isValid && passwordsMatch) {
        message.textContent = 'Succesfully Registered'
        message.style.color = 'green';
        message.style.borderColor = 'green'
    }
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm()
}

function storeFromData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // user data
    console.log(user)
}


// Event Listener
form.addEventListener('submit', processFormData);