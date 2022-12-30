// function addMovie(){
//     let movieName = document.getElementById('movieName').value;

//     if(movieName){
//       let watchList = document.getElementById('watchList');

//       let li = document.createElement('li');
//       li.innerHTML = movieName;

//       let deleteBtn = document.createElement('button');
//       deleteBtn.innerHTML = 'X';
//       deleteBtn.onclick = deleteMovie;

//       li.appendChild(deleteBtn);
//       watchList.appendChild(li);

//       document.getElementById('movieName').value = '';
//     }
//   }

//   function deleteMovie(evt){
//     console.log(evt);
//     let li = evt.target.parentElement;
//     let ul = li.parentElement;

//     ul.removeChild(li);
//   }
function deleteMovie(evt){
    console.log(evt);
    let li = evt.target.parentElement;
    console.log(li)
    let ul = li.parentElement;
    
    ul.removeChild(li);
}
let form = document.querySelector("form");
function handleSubmit(event){
    event.preventDefault();

    let moviename = event.target.elements.movie.value;
    console.log(moviename);
    if(moviename){
        let addlist = document.getElementById('watchList');

        
        let li = document.createElement('li');
        li.innerText = moviename;

        // let checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';

        let deleteBtn = document.createElement('span');
        deleteBtn.classList.add("delete-Btn")
        deleteBtn.innerText = '❌';
        deleteBtn.onclick = deleteMovie;

        
        addlist.append(li);
        li.append(checkbox);
        li.append(deleteBtn);
    }
}
form.addEventListener("submit",handleSubmit);
