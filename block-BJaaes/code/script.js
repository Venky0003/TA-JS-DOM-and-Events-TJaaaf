let form = document.querySelector("form");
let errorMsg = {};
function displayError(name){
    form.elements[name].nextElementSibling.innerText = errorMsg[name];
    form.elements[name].classList.add("error");
}

function handleSubmit(event){
    event.preventDefault();

    let elements = event.target.elements;

    let username = elements.username.value;
    if(username.length < 4){
        errorMsg.username = "User Name can't be less than four characters";
        displayError("username");
    }
}
form.addEventListener("submit", handleSubmit);