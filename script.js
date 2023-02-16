// Initializing variables


const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const results = document.querySelector("#results");

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let winner = document.querySelector('#winner-announcement');

let computerCounter = 0;
let playerCounter = 0;

function startGame() {
    computerCounter = 0;
    playerCounter = 0;
    playerScore.textContent = "The player currently has 0 points";
    computerScore.textContent = "The computer currently has 0 points";
}

startGame();

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
    }   else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            results.textContent = "You get a point!  Paper beats Rock!";
            playerCounter++;
        } else if (computerSelection === "scissors") {
            results.textContent = "The computer gets a point!  Scissors beats paper!";
            computerCounter++;
        } else {
            results.textContent = "It is a tie...you both chose Paper!";
        }
     }  else if (playerSelection === "scissors") {
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

// This function updates the score

function updateScore(playerCounter, computerCounter) {
    if (playerCounter === 1) {
        playerScore.textContent = "You now have 1 point!";
    } else if (computerCounter === 1) {
        computerScore.textContent = "The computer now has 1 point!";
    } else {
        playerScore.textContent = `You now have ${playerCounter} points!`;
        computerScore.textContent = `The computer now has ${computerCounter} points!`;
    }
    checkWinner(playerCounter, computerCounter);
}

function checkWinner(playerCounter, computerCounter) {
    if (playerCounter === 5) {
        winner.textContent = "Congratulations!  You beat the computer!";
        startGame();
    } else if (computerCounter === 5) {
        winner.textContent = "Too bad!  The computer beat you!";
        startGame();
    }
}