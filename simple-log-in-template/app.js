const email = document.getElementById('email').value;
const password = document.getElementById('logPassword').value;
const form = document.getElementById('form').value;
const errorElement = document.getElementById('error').value;

form.addEventListener('submit', (e)=> {
    let messages = []
    if (email.value === '' || email.value == null){
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})