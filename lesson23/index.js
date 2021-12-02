const formElem = document.querySelector('.login-form')
const submitButton = document.querySelector('.submit-button')
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password')

const isRequired = value => value
    ? undefined
    : 'Required';

const isEmail = value => value.includes('@')
    ? undefined
    : 'Should be an email';

const onEmailChange = event => {
    const errorText = [isRequired, isEmail]
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ');
    emailErrorElem.textContent = errorText
}
const onPasswordChange = event => event.target.value
    ? passwordErrorElem.textContent = undefined
    : passwordErrorElem.textContent = 'Required';


emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);
const onFormSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formElem))
    alert(JSON.stringify(formData))
}
formElem.addEventListener('submit', onFormSubmit)