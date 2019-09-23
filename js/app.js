const fname = document.getElementsByClassName("firstName");
const lname = document.getElementsByClassName("lastName");
const email = document.getElementsByClassName("email");
const pswd = document.getElementsByClassName("password");
const form = document.getElementById("form");


/*Looks like it's not an email*/

form.addEventListener("submit", function (event){
    if(fname[0].children[0].value === "" && lname[0].children[0].value === "" && email[0].children[0].value === "" && pswd[0].children[0].value === "") {
        fname[0].children[1].classList.add("show");
        fname[0].children[2].classList.add("show");
        lname[0].children[1].classList.add("show");
        lname[0].children[2].classList.add("show");
        email[0].children[1].classList.add("show");
        email[0].children[2].classList.add("show");
        pswd[0].children[1].classList.add("show");
        pswd[0].children[2].classList.add("show");
        event.preventDefault();

    }

    /* else if(email[0].children[0].value && (/(^\w.*@\w+\.\w)/).test(email[0].children[0].value)) {
        event.preventDefault();
        console.log("email invalid");
    } */
    
});


