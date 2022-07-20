
let choices = ["rock", "paper", "scissors"];

function game() {
for (let i = 0; i <= 5; i++) {
playRound();
}
}

function playRound() {
//to play the round and show result

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(computerSelection);

const winner = checkInput(playerSelection, computerSelection);
console.log(winner);
}

function getComputerChoice () {
//to get computer choice (also you can set choices.length instead of 3)
 return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice () {
//to get player choice
let playerInput = prompt("Enter rock, paper or scissors here");
playerInputs = playerInput.toLowerCase();
return playerInput;
}

function checkInput(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win";
    }
    else {
        return "You lose";
    }
}

game ();
