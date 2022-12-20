
let div = document.querySelector('div')
div.classList.add('flex','wrap')

function randomColors(){
    let hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    let color = '#';

    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random()*16);
        color=color+hexChars[randomNumber]
    }
}
for (let i = 0; i < 500; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box')
   boxes.addEventListener('mousemove',function(){
    boxes.innerText = Math.floor(Math.random() * 500);
    function randomColors(){
        let hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    
        let color = '#';
    
        for(let i=0;i<6;i++){
            let randomNumber = Math.floor(Math.random()*16);
            color=color+hexChars[randomNumber]
        }
        boxes.style.backgroundColor = color;
    }

       randomColors()

   })
    div.append(boxes);
  }

