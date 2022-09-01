
let choices = ["rock", "paper", "scissors"];

// We add the following to call them to this file

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let outcomeDiv = document.querySelector(".outcome");




function game() {
// for (let i = 0; i <= 5; i++) 
{ playRound(); 
}};

function playRound() {
//to play the round and show result

//let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//const winner = checkInput(playerSelection, computerSelection);
//console.log(winner);
}

function getComputerChoice () {
//to get computer choice (also you can set choices.length instead of 3)
 return choices[Math.floor(Math.random() * 3)];
}


/* function getPlayerChoice () {
    // to get player choice
let playerInput = prompt("Enter rock, paper or scissors here");
playerInputs = playerInput.toLowerCase();
return playerInput;} */


function checkInput(playerSelection, computerSelection) {
    console.log("Player:", playerSelection, "Computer:", computerSelection);
    if (playerSelection === computerSelection) {
        let paraTie = document.createElement ("p");
        paraTie.textContent = "Tie";
        outcomeDiv.appendChild(paraTie);
        // above we add text to showcase in window
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
                
        let paraWon = document.createElement ("p");
        paraWon.textContent = "You Won!";
        outcomeDiv.appendChild(paraWon);
        // above we add text to showcase in window
    }
    else {
        let paraLost = document.createElement ("p");
        paraLost.textContent = "You Lost";
        outcomeDiv.appendChild(paraLost);
        // above we add text to showcase in window
    }
}

/* the event listener is added below to record clicks of buttons
here we get the computer choice and player click to record 
and finally check the input against each other*/


rockBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    checkInput(playerSelection, computerSelection);

});
paperBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    checkInput(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    checkInput(playerSelection, computerSelection);

});

game ();
