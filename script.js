// Initializing variables


const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

let computerCounter = 0;
let playerCounter = 0;

// Button functionality

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


// This function simulates the computers choice

function getComputerChoice() {
    let result = Math.floor(Math.random() * 99);
    if (result < 33) {
        return "rock";
    } else if (result > 66) {
        return "scissors";
    } else {
        return "paper";
    }
}

// This function plays a single round and tallies score

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It is a tie...you both chose Rock!");
        } else if (computerSelection === "paper") {
            console.log("The computer gets a point!  Paper beats Rock!")
            return computerCounter++;
        } else {
            console.log("You get a point!  Rock beats Scissors!");
            return playerCounter++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You get a point!  Paper beats Rock!");
            return playerCounter++;
        } else if (computerSelection === "paper") {
            console.log("It is a tie...you both chose Paper!");
        } else {
            console.log("The computer gets a point!  Scissors beats Paper!");
            return computerCounter++;
        }    
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("The computer gets a point!  Rock beats Scissors!");
            return computerCounter++;
        } else if (computerSelection === "paper") {
            console.log("You get a point!  Scissors beats Paper!");
            return playerCounter++;
        } else {
            console.log("It is a tie...you both chose Scissors!");
        }
    } 
}

// This function plays a 5 round game

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("make your choice: ", "Rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Your score is ${playerCounter}.  The computer's score is ${computerCounter}`);
    }
    if (playerCounter > computerCounter) {
        console.log(`YOU WIN!  The final score is ${playerCounter} to ${computerCounter}`);
    } else if (computerCounter > playerCounter) {
        console.log(`YOU LOSE!  The final score is ${playerCounter} to ${computerCounter}`);
    } else {
        console.log(`It is a tie!`);
    }
}

// game(computerCounter, playerCounter);
