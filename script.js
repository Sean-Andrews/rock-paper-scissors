// Initializing variables

const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const results = document.querySelector("#results");

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let winner = document.querySelector('#winner-announcement');

let computerCounter;
let playerCounter;

function startGame() {
    computerCounter = 0;
    playerCounter = 0;
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    results.textContent = "";
    winner.textContent = "";
    addButtonFunctions();
}

startGame();

// Button functionality

function addButtonFunctions() {
    rock.addEventListener('click', rockChoice);
    paper.addEventListener('click', paperChoice);
    scissors.addEventListener('click', scissorsChoice);
}

function rockChoice() {
    playRound('rock', getComputerChoice());
}

function paperChoice() {
    playRound('paper', getComputerChoice());
}

function scissorsChoice() {
    playRound('scissors', getComputerChoice());
}


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
    playerScore.textContent = `${playerCounter}`;
    computerScore.textContent = `${computerCounter}`;
    checkWinner(playerCounter, computerCounter);
}

function checkWinner(playerCounter, computerCounter) {
    if (playerCounter === 5) {
        winner.textContent = "Congratulations!  You beat the computer!";
        removeButtonFunctions();
        playAgain();
    } else if (computerCounter === 5) {
        winner.textContent = "Too bad!  The computer beat you!";
        removeButtonFunctions();
        playAgain();
    }
}

// This function creates a play again button

function playAgain() {
    let playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = "Play Again?";
    playAgainBtn.className = "play-again-btn";
    winner.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', function() {
        startGame();
    })
}

function removeButtonFunctions() {
    rock.removeEventListener('click', rockChoice);
    paper.removeEventListener('click', paperChoice);
    scissors.removeEventListener('click', scissorsChoice);
}
