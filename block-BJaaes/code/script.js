
let form = document.querySelector("form");
let usernameError = "";
let nameError = "";
let emailError = "";
let numberError = "";
function doesContainAnumber(str){
    return str.split('').some(e => Number(e))
}

function handleSubmit(event){
    event.preventDefault();

    let userNameElm = event.target.elements.username;
    if(userNameElm.value === "") {
        usernameError = "User Name can't be empty"
    }
    else if(userNameElm.value.length < 4){
        usernameError = "User Name can't be less than four characters";
    }
    else{
        usernameError = "";
    }
    userNameElm.nextElementSibling.innerText = usernameError;

    let nameElm = event.target.elements.name;
    if(nameElm.value === "") {
        nameError = "Name can't be empty";
    }
    else if(doesContainAnumber(nameElm.value)){
        nameError = "Name should not contain numbers";
    }
    else{
        nameError = "";
    }
    nameElm.nextElementSibling.innerText = nameError;

    let emailElm = event.target.elements.email;
    if(emailElm.value === "") {
        emailError = "Email can't be empty";
    }
    else if(emailElm.value.length < 6){
        emailError = "Email can't be less than six characters";
    }
    else{
        emailError = "";
    }
    emailElm.nextElementSibling.innerText = emailError;

    let numberElm = event.target.elements.number;
    //console.log(numberElm.value)
    if(numberElm.value === "") {
        numberError = "Can't be empty";
    }
    else if(numberElm.value.length < 7){
        numberError = "Can't be less than seven characters";
    }
    else{
        numberError = "";
    }
    numberElm.nextElementSibling.innerText = numberError;
}
form.addEventListener("submit", handleSubmit);