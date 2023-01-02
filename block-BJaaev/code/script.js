let inputText = document.querySelector("#text");
let rootElm = document.querySelector("ul");
let filter = document.querySelector(".filter");

let allTodos = JSON.parse(localStorage.getItem("todos"))|| [];

function handleInput(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "" ){
    let todo ={
        name:value,
        isDone:false,
    };
    allTodos.push(todo);
    event.target.value ="";
    }
   
    createUI(allTodos,rootElm);
    localStorage.setItem("todos",JSON.stringify(allTodos));
}

function handleDelete(event){
    // console.log(event.target.dataset.id)
    let id = event.target.dataset.id;
    allTodos.splice(id,1);

    localStorage.setItem("todos",JSON.stringify(allTodos))
    createUI(allTodos,rootElm);
}
function handleToggle(event){
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;

    localStorage.setItem("todos",JSON.stringify(allTodos))
    createUI(allTodos,rootElm);
}

// adding all button
let allButton = document.createElement("button");
allButton.innerText = "All";
allButton.addEventListener("click", () => {
    createUI(allTodos, rootElm);
});

// adding active button
let activeButton = document.createElement("button");
activeButton.innerText = "Active";
activeButton.addEventListener("click", () => {
    let activeTodos = allTodos.filter(todo => !todo.isDone);
    createUI(activeTodos, rootElm);
});

// adding completed button
let completedButton = document.createElement("button");
completedButton.innerText = "Completed";
completedButton.addEventListener("click", () => {
    let completedTodos = allTodos.filter(todo =>todo.isDone
    );
    createUI(completedTodos, rootElm);
});


filter.append(allButton,activeButton,completedButton)
function createUI(data,rootElm){
    rootElm.innerHTML="";
    data.forEach((todo,index)=>{
        let li = document.createElement("li");
        li.classList.add("flex");
        let input = document.createElement("input");
        input.type ="checkbox";
        input.checked =todo.isDone;
        input.setAttribute("data-id",index)
        input.addEventListener("change",handleToggle);
        let p= document.createElement("p");
        p.innerText = todo.name;
        if (todo.isDone) {
            p.style.textDecoration = "line-through";
            p.style.color = "grey";
        }
        let span = document.createElement("span");
        span.innerText = "❌";
        span.setAttribute("data-id",index)
        let hr = document.createElement("hr");
        hr.style.border="1 px solid grey";
        span.addEventListener('click',handleDelete);
        
        li.append(input,p,span);
        rootElm.append(li,hr);
    })
    localStorage.setItem("todos",JSON.stringify(allTodos));
}
createUI(allTodos,rootElm);


inputText.addEventListener("keyup",handleInput);