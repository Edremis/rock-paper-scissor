const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorButton = document.querySelector(".scissorButton");
let playerChoice;
let computerChoice;
let endGame = false;
rockButton.addEventListener("click", ()=>{
    playerChoice = "Rock";
    endGame == false ? playRound() : resetGame();
});
paperButton.addEventListener("click", ()=>{
    playerChoice = "Paper";
    endGame == false ? playRound() : resetGame();

});
scissorButton.addEventListener("click", ()=>{
    playerChoice = "Scissor";
    endGame == false ? playRound() : resetGame();

});



let playerPoint = 0;
let computerPoint = 0;
const newPlayer = document.createElement("p");
const newComputer = document.createElement("p");
const newResult = document.createElement("p");
const points = document.createElement("p");
const ring = document.querySelector(".results");
ring.appendChild(newPlayer);
ring.appendChild(newComputer);
ring.appendChild(newResult);
ring.appendChild(points);


function playRound(){
computerChoice = getComputerChoice();
round(playerChoice,computerChoice);
if(playerPoint == 5 || computerPoint == 5){
    points.textContent = checkWinner();
}
}
function resetGame(){
    playerPoint = 0;
    computerPoint = 0;
    endGame = false;
    playRound();
}



function round(playerChoice, computerChoice){
    
    newPlayer.textContent = "Jugador saca: "+playerChoice;
    
    newComputer.textContent = "Computadora saca: "+computerChoice;
    
    newResult.textContent = whoWins(playerChoice,computerChoice);
}

function checkWinner(){
    endGame = true;
    return playerPoint > computerPoint ? "Gana el jugador!" : "Gana la computadora!";
}



function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    switch (a) {
        case 0:
            return "Paper";
        case 1:
            return "Scissor";
        case 2:
            return "Rock";
    }
}

function refreshCounter(){
    points.textContent = "Player: " + playerPoint + " - Computer: "+computerPoint;
}

function whoWins(a, b) {
    if (a === "Paper") {
        switch (b) {
            case "Paper":
                refreshCounter();
                return "Empate";
            case "Rock":
                playerPoint++;
                refreshCounter();
                return "Punto para el jugador";
            case "Scissor":
                computerPoint++;
                refreshCounter();
                return "Punto para la computadora";
        }
    }
    if (a === "Rock") {
        switch (b) {
            case "Paper":
                computerPoint++;
                refreshCounter();
                return "Punto para la computadora";
            case "Rock":
                refreshCounter();
                return "Empate";
            case "Scissor":
                playerPoint++;
                refreshCounter();
                return "Punto para el jugador";
        }
    }
    if (a === "Scissor") {
        switch (b) {
            case "Paper":
                playerPoint++;
                refreshCounter();
                return "Punto para el jugador";
            case "Rock":
                computerPoint++;
                refreshCounter();
                return "Punto para la computadora";
            case "Scissor":
                refreshCounter();
                return "Empate";
        }
    }
}
