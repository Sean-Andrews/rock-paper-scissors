// Initializing variables


const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const results = document.querySelector("#results");

let computerCounter = 0;
let playerCounter = 0;

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');

playerScore.textContent = "The player currently has 0 points";
computerScore.textContent = "The computer currently has 0 points";

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
            results.textContent = "It is a tie...you both chose Rock!";
        } else if (computerSelection === "paper") {
            results.textContent = "The computer gets a point!  Paper beats Rock!";
            computerCounter++;
        } else {
            results.textContent = "You get a point!  Rock beats Scissors!";
            playerCounter++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            results.textContent = "You get a point!  Paper beats Rock!";
            playerCounter++;
        } else if (computerSelection === "paper") {
            results.textContent = "It is a tie...you both chose Paper!";
        } else {
            results.textContent = "The computer gets a point!  Scissors beats Paper!";
            computerCounter++;
        }    
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            results.textContent = "The computer gets a point!  Rock beats Scissors!";
            computerCounter++;
        } else if (computerSelection === "paper") {
            results.textContent = "You get a point!  Scissors beats Paper!";
            playerCounter++;
        } else {
            results.textContent = "It is a tie...you both chose Scissors!";
        }
    } 
    updateScore(playerCounter, computerCounter);
}

function updateScore(playerCounter, computerCounter) {
    if (playerCounter === 1) {
        playerScore.textContent = "You now have 1 point!";
    } else if (computerCounter === 1) {
        computerScore.textContent = "The computer now has 1 point!";
    } else {
        playerScore.textContent = `You now have ${playerCounter} points!`;
        computerScore.textContent = `The computer now has ${computerCounter} points!`;
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
