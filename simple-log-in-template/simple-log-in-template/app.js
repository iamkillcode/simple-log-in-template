const name = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})


// SignUp

const username = document.getElementById('username')
const address = document.getElementById('address')
const errorElement2 = document.getElementById('error2')
const regForm = document.getElementById('regForm')

regForm.addEventListener('submit', (e)=> {
    let messagesReg = []
    let upCase = /^[A-Z]/;
    if (username.value == upCase) {
        messagesReg.push('Username cannot contain Upper cases')
    }

    if (messagesReg.length > 0) {
        e.preventDefault()
        errorElement2.innerText = messagesReg.join(', ')
    }
})
















// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e)=> {
//     let messages = []
//     if (email.value == null || email.value === '') {
//         messages.push('Email is required')
//     }

//     if (messages.length < 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })









