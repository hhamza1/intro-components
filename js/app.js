const form = document.getElementById("form");
const email = document.querySelector("input[type=email]");
const fname = document.querySelector("input[name=fname]");
const lname = document.querySelector("input[name=lname]");
const pswd = document.querySelector("input[name=pswd]");
const emailError = document.querySelectorAll(".email");
const fnameError = document.querySelectorAll(".firstName");
const lnameError = document.querySelectorAll(".lastName");
const pswdError = document.querySelectorAll(".password");

let emailValidity = email.validity;

const emailValidator = (input, validation) => {
    if(!validation.valid || input.value === "") {
        emailError.forEach(error => {
            error.classList.add("show");
        });
    }
    else {
        emailError.forEach(error => {
            error.classList.remove("show");
        });
    }
}

const inputValidation = (input,inputError) => {
    if(input.value === "") {
        inputError.forEach(error => {
            error.classList.add("show");
        });
    }
    else {
        inputError.forEach(error => {
            error.classList.remove("show");
        });
    }
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
     inputValidation(fname,fnameError);
     inputValidation(lname,lnameError);
     emailValidator(email,emailValidity);
     inputValidation(pswd,pswdError);
});
