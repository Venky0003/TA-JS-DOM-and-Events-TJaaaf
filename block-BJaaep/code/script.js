function firstBox(){
let root = document.querySelector('.boxes');

function handleClick(boxText,num){
    boxText.innerText = num
    setTimeout(function(){
        boxText.innerText= "";
    }, 5000)
}

for(let i = 1; i <= 12; i++){
    let boxOne = document.querySelector('li');
    boxOne.addEventListener('click', function(){
        handleClick(boxOne,i)
    });
    root.append(boxOne);
}
}
firstBox();



// second box



function secondBox(){
let rootTwo = document.querySelector('.box-two');

for(let i = 1; i <= 12; i++){
    let li = document.createElement('li');
    li.classList.add('box')
    let h2 = document.createElement('h2')
    li.append(h2)
    li.setAttribute("data-num",i)

    rootTwo.append(li);
}

function handleClickEvent(event){
   let val =event.target.dataset.num;
   event.target.innerText=val;
   setTimeout(function(){
    event.target.innerText="";
}, 5000)
}

rootTwo.addEventListener('click',handleClickEvent)
}
secondBox();