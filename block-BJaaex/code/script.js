let cardsArray = [
    {
        name:'knifegirl',
        img:'../images/img1.jpg'
    },
    {
        name:'redman',
        img:'../images/img2.jpg'
    },
    {
        name:'grennhouse',
        img:'../images/img3.jpg'
    },
    {
        name:'hauntedhouse',
        img:'../images/img4.jpg' 
    },
    {
        name:'supergirl',
        img:'../images/img5.jpg' 
    },
    {
        name:'magicgirl',
        img:'../images/img6.jpg' 
    },
    {
        name:'axeman',
        img:'../images/img7.jpg'
    },
    {
        name:'magicboy',
        img:'../images/img8.jpg' 
    }
]

let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(()=> 0.5 - Math.random())

let game = document.getElementById("game");
let grid = document.createElement("section");
let moves = document.getElementById("moves");
let timeValue = document.getElementById("time");
// console.dir(grid);
grid.setAttribute('class','grid')
game.appendChild(grid);


gameGrid.forEach((item)=>{
    let card = document.createElement('div');
    card.classList.add('card','center');
    card.setAttribute ("data-name",item.name);
   

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

let firstGuess = '';
let secondGuess= '';
let count = 0;
let previousTarget = null;
let delay = 900;
let interval;

function match(){
    let selected = document.querySelectorAll('.selected');
    selected.forEach((card)=>{
        card.classList.add('match');
    })
}

function reset(){
    firstGuess = "";
    secondGuess ="";
    count = 0;
    previousTarget = null;

    let selected =document.querySelectorAll('.selected');
    selected.forEach((card)=>{
        card.classList.remove('selected')
    })
}

let movesCount = 0;



// for moves count
function movesCounter () {
  movesCount += 1;
  moves.innerHTML =`<span>Moves:</span>${movesCount}`;
}

grid.addEventListener('click',(event)=>{
  
    let val = event.target;

    if(val.nodeName === 'SECTION'||
    val === previousTarget ||
    val.parentNode.classList.contains('selected')||
    val.parentNode.classList.contains('match')
     ) 
     {
        return;
     }
    if (count < 2) {
        count++;
        if(count === 1) {
            firstGuess = val.parentNode.dataset.name;
            console.log(firstGuess);
           val.parentNode.classList.add('selected');
        } else {
            secondGuess =val.parentNode.dataset.name;
            console.log(secondGuess);
           val.parentNode.classList.add('selected')
           movesCounter()
        }
        if (firstGuess  && secondGuess ) {
            movesCounter()
            if(firstGuess === secondGuess) {
                setTimeout(match,delay);
               
            } 
                setTimeout(reset,delay)
        }
        previousTarget =val;
      }

})




