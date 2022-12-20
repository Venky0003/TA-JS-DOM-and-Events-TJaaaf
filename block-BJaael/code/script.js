

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}


function getRandomColors(){
    let hexChar = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    
    let color = '#';

    for(let i=0;i<6;i++){
        let randomNumber = getRandomNumber(16);
        color=color+hexChar[randomNumber];
    }
    return color;
}
let mainDiv = document.querySelector('div')
mainDiv.classList.add('flex','wrap')

for (let i = 0; i < 500; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box')
   
    let h3=document.createElement('h3')
    let randomNum=getRandomNumber(500)
    h3.innerText=randomNum;
    boxes.append(h3)

    mainDiv.append(boxes)
  }


  let allBoxes = document.querySelectorAll(".box")

  function handleMouseMove(){

    allBoxes.forEach((eachBox)=>{
        eachBox.style.backgroundColor=getRandomColors();

        eachBox.querySelector("h3").innerText=getRandomNumber(500);
    })
  }

  mainDiv.addEventListener("mousemove",handleMouseMove);
