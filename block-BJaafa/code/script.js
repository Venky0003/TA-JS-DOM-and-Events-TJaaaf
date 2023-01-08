let input = document.querySelector(`input[type="text"]`);
let rootElm = document.getElementById("tasklist")

let allTasks = [];

input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && event.target.value){
    allTasks.push({
        task:event.target.value,
        isDone:false,
    })
    event.target.value = '';
    createUI();
}
})
function deleteTarget(evt){
    let li = evt.target.parentElement;
    console.log(li)
    let ul = li.parentElement;
    
    ul.removeChild(li);
}

function handleChange(event){
    let id =event.target.id;
    
    allTasks[id].isDone = !allMovies[id].isDone; 

}
function createUI(){
    rootElm.innerHTML = "";
    allTasks.forEach((target,i)=>{
        let li = document.createElement('li');
        li.style.display = "flex";
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = target.isDone;
        checkbox.id = i;

        checkbox.addEventListener("change",handleChange);

        let label = document.createElement('label');
        label.for = i;
        label.innerText = target.task;

        let deleteBtn = document.createElement('span');
        deleteBtn.classList.add("delete-Btn")
        deleteBtn.innerText = '❌';
        deleteBtn.onclick = deleteTarget;

        
       
        li.append(checkbox,label,deleteBtn);

        rootElm.append(li)
    })
}
createUI();
