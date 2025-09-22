const form = document.getElementById('form');
const usename = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '') {
    setErrorFor(username, 'O nome de usuário é obrigatório');        
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório');        
        } else {
            setSuccessFor(email);
        }

    if (passwordValue === '') {
            setErrorFor(password, 'A senha é obrigatório');        
        } else {
                setSuccessFor(password);
        }
    
    if (passwordConfirmationValue === '') {
            setErrorFor(passwordConfirmation, 'A confirmaçãosenha é obrigatório');        
        } else {
                setSuccessFor(passwordConfirmation);
        }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    formControl.className = 'form-control success'
}



function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }  