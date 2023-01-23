// This function simulates the computers choice

function getComputerChoice() {
    let result = Math.floor(Math.random() * 99);
    return result;
}

// This function plays a single round

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It is a tie...you both chose Rock!");
        } else if (computerSelection === "paper") {
            console.log("You lose!  Paper beats Rock!")
        } else {
            console.log("You win!  Rock beats Scissors!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win!  Paper beats Rock!");
        } else if (computerSelection === "paper") {
            console.log("It is a tie...you both chose Paper!");
        } else {
            console.log("You lose!  Scissors beats Paper!");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose!  Rock beats Scissors!");
        } else if (computerSelection === "paper") {
            console.log("You win!  Scissors beats Paper!");
        } else {
            console.log("It is a tie...you both chose Scissors!");
        }
    } 
}

// Initializing constants 

const playerSelection = prompt("make your choice: ", "Rock, paper, or scissors");

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));