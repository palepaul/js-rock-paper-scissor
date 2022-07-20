# js-rock-paper-scissor
Rock Paper Scissor Game

1. Created a main.js file

2. Declared an array choices with rock, paper and scissors items. 

3. Added function getComputerChoice ()

Here, we return choices[Math.floor(Math.random() * 3)];

choices (lets us call the values from choices array)
Math.floor (rounds of the number)
Math.random() (chooses a random number between 0-1)
3 is added so it chooses between the three array items

4. Added function getPlayerChoice ()

Here, we want to show a prompt to the player, so they can enter a value

let playerInput = prompt("Enter rock, paper or scissors here");

prompt and message inside (), lets us show that message in a prompt. 

Added: playerInputs = playerInput.toLowerCase(); 
(This makes the input lowercase)

Adding: return playerInput; (to return input)
 
5. Added function playRound ()

Here we:

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

6. Added function game ()

Here we add playRound() 

7. Add function checkInput(playerSelection, computerSelection); (we add this to add if and else statements for conditions)

if (playerSelection === computerSelection) {
        return "Tie";
    }
(this will get reflected if both selections are same)

else if ((playerSelection === "rock" && computerSelection === "scissors") || 
         (playerSelection === "paper" && computerSelection === "rock") || 
         (playerSelection === "scissors" && computerSelection === "paper")) 
         {
        return "You win";
         }

         (this is if our selection is correct)

    else {
        return "You lose";
    }
    (this is if computer selection is correct)

8. In function playRound () 

We add: 

const winner = checkInput(playerSelection, computerSelection);
console.log(winner);

This prints in the winner in the console. 

9. To run the game 5 times, in the function game()

We add a loop for (let i = 0; i <= 5; i++) {
    playRound();
}

This will run the game five times (after which the prompt will stop) and show the results in the console