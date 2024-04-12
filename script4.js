const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const num = "123456789"
const sym = "!@#$%^&*(){}[]:;></?+_-=";
const allch = upperCase+lowerCase+num+sym;
function createRandomPassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += sym[Math.floor(Math.random() * sym.length)];

    while(length > password.length){
    password += allch[Math.floor(Math.random() * allch.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}