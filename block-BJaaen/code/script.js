
let playerScore = 0;
let computerScore = 0;

let playerScoreSpan = document.querySelector(".player-score");
let computerScoreSpan = document.querySelector(".computer-score");
let result = document.querySelector(".result");
let computerOptions = ['rock','paper','scissors'];
let playerName = document.querySelector(".player-choice");
let computerName = document.querySelector(".computer-choice");
let rockDiv = document.querySelector(".rock");
let paperDiv = document.querySelector(".paper");
let scissorsDiv = document.querySelector(".scissors");
let allPlayers = document.querySelector(".player")
function getRandomChoice(){
    let choices = ["rock","paper","scissors"]
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum]
}

function displayOptionsUser(userChoice){
    if(userChoice ==="rock"){
        return  playerName.innerHTML ="---Rock"
        }
        else if(userChoice === "paper"){
            return playerName.innerHTML = "---Paper"
        }
        else
        return playerName.innerHTML="---Scissors"
}

function displayOptionsComputer(computerChoice){
    if(computerChoice ==="rock"){
        return computerName.innerHTML ="---Rock"
        }
        else if(computerChoice === "paper"){
         return computerName.innerHTML = "---Paper"
        }
        else{
        return computerName.innerHTML="---Scissors"
        }
}


function win(userChoice,computerChoice){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore; 
    computerScoreSpan.innerHTML = computerScore;       
    result.textContent = "You Won";
    displayOptionsUser(userChoice);
    displayOptionsComputer(computerChoice);
}
function lost(userChoice,computerChoice){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;     
    result.textContent = "You Lost!";
    displayOptionsUser(userChoice);
    displayOptionsComputer(computerChoice);
}
function draw(userChoice,computerChoice){
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;
    result.textContent = "It's a Tie"; 
    displayOptionsUser(userChoice);
    displayOptionsComputer(computerChoice);
}

function game(userChoice){
    let computerChoice = getRandomChoice();
    switch(userChoice+computerChoice){
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
        win(userChoice,computerChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        lost(userChoice,computerChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw(userChoice,computerChoice);
        break;
        default:
        break;                                    
    }
    
}


function main(){
rockDiv.addEventListener('click', function() {
   rockDiv.classList.add("selected");
   paperDiv.classList.remove("selected");
   scissorsDiv.classList.remove("selected"); 
   game("rock");
})
paperDiv.addEventListener('click',function () {
    paperDiv.classList.add("selected");
    scissorsDiv.classList.remove("selected");
    rockDiv.classList.remove("selected"); 
   game("paper");
})

scissorsDiv.addEventListener('click',function () {
    scissorsDiv.classList.add("selected");
    paperDiv.classList.remove("selected");
    rockDiv.classList.remove("selected");
   game("scissors");
})


    let reload = document.querySelector(".reset");
    reload.addEventListener('click',function(){
        window.location.reload();
    })

}
main();
