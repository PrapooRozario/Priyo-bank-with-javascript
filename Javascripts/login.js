// Login details
let email = 'abc@gmail.com';
let password = '1234';

// Login oparation
const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('password');
const errorMsg = document.getElementById('error-msg')

document.getElementById('login-btn').addEventListener('click', function(){
if(inputEmail.value === email && inputPass.value === password){
    window.location.href = 'bank.html'
    errorMsg.classList.add('invisible')

}
else{
    errorMsg.classList.remove('invisible')
}
})

