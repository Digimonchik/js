function finishForm() {
    let newInput = document.createElement('input');
    let myForm = document.querySelector('.login-form');
    myForm.prepend(newInput);
    newInput.setAttribute('type','text');
    newInput.setAttribute('name', 'login');
    let passwordForm = document.querySelector("input[name = 'password']");
    passwordForm.setAttribute('type', 'password')
    
}