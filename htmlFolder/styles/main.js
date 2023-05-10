function setFormMessage(formElement, type, message){
    let messageElement = formElement.querySelector(".form__message");

    messageElement.textContent=message;
    messageElement.classList.remove ("form__message__success","form__message__error");
    messageElement.classList.add('form__message__${type}');
}
function setInputError(inputElement,message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

document.addEventListener("DOMContentLoaded",()=>{
let loginForm = document.querySelector("#login");
let createAccountForm = document.querySelector("#createAccount");

document.querySelector("linkCreateAccount").addEventListener(click, e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.remove("form--hidden");
})

document.querySelector("linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form__hidden");
    createAccountForm.add("form__hidden");
})

loginForm.addEventListener("submit", e =>{
e.preventDefault();
//perform your AJAX/Fetch login
setFormMessage(loginForm,".form__input-error-message","error","Invalid username/password combination")
})
})