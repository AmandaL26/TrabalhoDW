const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const passawoedConfimation= document.getElementById('password-confirmation');
const cpf= document.getElementById('cpf');
const cnpj= document.getElementById('cnpj');
const pessoaselect= document.getElementById('pessoaselect')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkImput();
})

 function checkImput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passawoedConfimationValue = passawoedConfimation.value;
    const cpfValue = cpf.value;
    const cnpjValue = cnpj.value;

   if (usernameValue === ''){
      setErrorFor(username, 'O nome de usuário é obrigatório');
   } else {
    setSuccessFor(username);
   }

   if (emailValue === ''){
    setErrorFor(email, 'O email é obrigatório!');
   } else {
  setSuccessFor(email);
   }

   if (passwordValue === ''){
     setErrorFor(password, 'Senha obrigatória');
   } else {
     setSuccessFor(password);
   }

   if (passawoedConfimationValue === ''){
     setErrorFor(passawoedConfimation, 'Confirmação de senha obrigatória');
   } else {
     setSuccessFor(passawoedConfimation);
   }

   if (cpfValue === ''){
     setErrorFor(cpf, 'O CPF é obrigatório');
   } else {
     setSuccessFor(cpf);
   }

   if (cnpjValue === ''){
     setErrorFor(cnpj, 'O CNPJ é obrigatório');
   } else {
     setSuccessFor(cnpj);
   }
 }

 function hide(){
  const pessoaselect= pessoaselect.value;

  if (pessoaselect === cpf){
    cpf.classList.remove('hide');
  } else if (pessoaselect === cnpj){
    cnpj.classList.remove('hide');
  }
 }

 function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
 }


 function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

    
 }


