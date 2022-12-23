
let numbers =document.querySelectorAll('.box');

let result = document.querySelector('.display');
let final="";
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',calculator)
}

function calculator(){
    let targetNumber =event.target.innerText
    
    if(targetNumber==='C'){
        final="";
        document.querySelector('.display').innerText='';
    }
    else if(targetNumber==='='){
        document.querySelector('.display').innerText=eval(final)
    }
    else{
        final += targetNumber;
        document.querySelector('.display').innerText=final
    }
    
}
