let allPeople = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[])

let allhouses = got.houses.map((house)=>house.name);
let activeHouse = "";  

let searchElm = document.querySelector("#text");
searchElm.addEventListener("input",(event)=>{
    let value = event.target.value;
    let filterPeople = allPeople.filter((people)=>{
        return people.name.toLowerCase().includes(value.toLowerCase());
    });
    rootElm.innerHTML = "";
    createUI(filterPeople);

})

let rootElm = document.querySelector("ul");
function createUI(data){
    rootElm.innerHTML="";
    data.forEach(people => {
    let li = document.createElement("li");
    li.classList.add("flex-30","center");
    let img = document.createElement("img");
    img.src = people.image;
    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    let p =document.createElement("p");
    p.innerText = people.description;
    p.classList.add("text")
    let a = document.createElement("a");
    a.innerText = "Know More!"
    a.href = people.wikiLink;
    li.append(img,h2,p,a)

    rootElm.append(li)
 });
}

let div = document.querySelector(".houses")
function createHousesUI(houses=[]) {
    div.innerHTML= "";
    houses.forEach((tag) =>{
        let p = document.createElement("p");
        p.innerText = tag;
        p.classList.add("house-names");

        if(activeHouse === tag) {
            p.classList.add("active")
        }
        p.addEventListener("click",()=>{
            activeHouse = tag;
            let filteredHouses = got.houses.find(house=>house.name === tag).people||[];
            createUI(filteredHouses);
            createHousesUI(allhouses)
        });
        div.append(p);
    });
}
createUI(allPeople);
createHousesUI(allhouses)
