let boxOne = document.querySelector('.first')

function randomColors(){
    return Math.floor(Math.random()*255);
}

boxOne.addEventListener('click',function(){
    boxOne.style.backgroundColor='rgb('+randomColors()+','+randomColors()+','+randomColors()+','+randomColors()+'\)'
})

let boxTwo = document.querySelector('.second')

boxTwo.addEventListener('mousemove',function(){
    boxTwo.style.backgroundColor='rgb('+randomColors()+','+randomColors()+','+randomColors()+','+randomColors()+'\)'
})