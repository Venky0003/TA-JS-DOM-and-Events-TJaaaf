let form = document.querySelector("form");
let errorMsg = {};
function displayError(name){
    form.elements[name].nextElementSibling.innerText = errorMsg[name];
    form.elements[name].classList.add("error");
}
function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMsg[name] = "";
    elm.classList.remove("error");
    elm.classList.add("success")
}

function handleSubmit(event){
    event.preventDefault();

    let elements = event.target.elements;

    let username = elements.username.value;
    if(username.length < 4){
        errorMsg.username = "User Name can't be less than four characters";
        displayError("username");
    } else {
        displaySuccess("username");
    }

    let name = elements.name.value;
    if(!isNaN(name)){
        errorMsg.name = "Name can't be numbers";
        displayError("name");
    } else {
        displaySuccess("name")
    }

    let email = elements.email.value;
    if(!email.includes("@")) {
        errorMsg.email = "Email must contain symbol @";
        displayError("email");
    } else if (email.length < 6) {
        errorMsg.email = "Email must be atleast 6 characters";
        displayError("email");
    } else {
        displaySuccess("email")
    }

    let number = elements.number.value;
    if(isNaN(number)) {
        errorMsg.number = "Phone Number can be only numbers ";
        displayError("number");
    } else if (number.length < 7) {
        errorMsg.number = "Phone number must be atleast 7 characters";
        displayError("number");
    } else {
        displaySuccess("number")
    }

    let password = elements.password.value;
    let passwordCheck = elements.passwordcheck.value;

    if(password !== passwordCheck) {
        errorMsg.password = "Password and confirm password must be same";
        errorMsg.passwordCheck = "Password and confirm password must be same";
        displayError("password");
        displayError("passwordCheck");
    } else {
        displaySuccess("password");
        displaySuccess("passwordCheck")
    }
}
form.addEventListener("submit", handleSubmit);
// 1. Username can't be less than 4 characters
// 2. Name can't be numbers
// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters
// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7
// 8. Password and confirm password must be same.