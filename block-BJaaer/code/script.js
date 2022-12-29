
let form = document.querySelector('.container')
let div =document.querySelector('.model')
let userInfo ={};
function handleSubmit(event){
    event.preventDefault();
    userInfo.name=form.elements.text.value;
    userInfo.email=form.elements.email.value;
    userInfo.option=form.elements.options.value;
    userInfo.color=form.elements.color.value;
    userInfo.range=form.elements.range.value;
    userInfo.drone=form.elements.drone.value;
    userInfo.terms=form.elements.terms.checked;
    form.style.display="none";
    console.log(userInfo);
    model();
    div.style.visibility = "visible";
}
let closeBtn = document.createElement('button');
function model(){
    closeBtn.innerHTML = "close";
    closeBtn.style.marginLeft="20rem";
    let h1 = document.createElement('h1');
    h1.innerText=`Hello ${userInfo.name}`;
    h1.style.fontSize="2rem";
    h1.style.fontWeight="700";
    let pEmail =document.createElement('p');
    pEmail.innerHTML = `Email: ${userInfo.email}`;
    pEmail.classList.add('font');
    let pOption =document.createElement('p');
    pOption.innerHTML = `Your love: ${userInfo.option}`;
    pOption.classList.add('font');
    let pColor =document.createElement('p');
    pColor.innerHTML = `Color: ${userInfo.color}`;
    pColor.classList.add('font');
    let pRange =document.createElement('p');
    pRange.innerHTML = `Rating: ${userInfo.range}`;
    pRange.classList.add('font');
    let pDrone =document.createElement('p');
    pDrone.innerHTML = `Book Genre: ${userInfo.drone}`;
    pDrone.classList.add('font');
    let pTerms =document.createElement('p');
    pTerms.classList.add('font');
    if(userInfo.terms ===true){
        pTerms.innerHTML = `You agree to Terms and Conditions`;
    }
    else{
            pTerms.innerHTML ='please check the terms and conditions';
            pTerms.style.color="red";
    }
    pTerms.style.textDecoration = "underline";
    div.append(closeBtn,h1,pEmail,pOption,pColor,pRange,pDrone,pTerms)
}
function main(){
form.addEventListener('submit',handleSubmit);
}
main()
function close(){
    div.style.visibility = "hidden";
    form.style.display="block";
}
closeBtn.addEventListener('click',close)