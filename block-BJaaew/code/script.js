let allPeople = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[])
console.log(allPeople);

let allhouses = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.name);
    return acc;
},[])
console.log(allhouses)

let searchElm = document.querySelector("#text");
searchElm.addEventListener("input",(event)=>{
    let value = event.target.value;
    let filterPeople = allPeople.filter((people)=>{
        return people.name.toLowerCase().includes(value.toLowerCase());
    });
    rootElm.innerHTML = "";
    createUI(filterPeople);

})

let div = document.querySelector(".houses")
function createHousesUI() {
    allhouses.forEach(house =>{
        let p = document.createElement("p");
        p.innerText = house;
        p.classList.add("house-names");

        div.append(p);
    })
}
createHousesUI()

let rootElm = document.querySelector("ul");
function createUI(data){
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
createUI(allPeople);
