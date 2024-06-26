//global variables to keep track of the score for the human and computer.
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

function getComputerChoice() {
    //store rock paper or scissors in empty string based on randomInt return value
    let computerChoice = "";
    //gets random int from 0-2.
    let randomInt = Math.floor(Math.random() * 3);
    //take number and add a string based on random number.
    switch (randomInt) {
        case (randomInt = 0):
            computerChoice += "rock";
            break;

        case (randomInt = 1):
            computerChoice += "paper";
            break;

        case (randomInt = 2):
            computerChoice += "scissors";
            break;
    }
    return computerChoice;
}

//getHumanChoice prompts user for valid input.
function getHumanChoice() {
    //declare  userInput;
    let userInput = "";
    userInput = prompt("Enter rock, paper or scissors");
    //run loop until user inputs a valid choice.
    while (
        userInput != "rock" &&
        userInput != "paper" &&
        userInput != "scissors"
    ) {
        userInput = prompt("Error! Please enter rock, paper or scissors.");
    }

    return userInput.toLowerCase();
}

//start new round and get new choices if roundCounter < 5.
//else run gameWin() function.
function roundOver() {
    if (roundCounter < 5) {
        //update roundCounter after every round.
        roundCounter++;
        playRound(getHumanChoice(), getComputerChoice());
    } else {
        gameWin();
    }
}

//playRound function to play a round.
//takes input from getHumanChoice and computerChoice as arguments.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("This round is a tie!");
        roundOver();

        // human win logic.
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(
            `You win this round! ${humanChoice} beats ${computerChoice}.`
        );
        roundOver();
    }

    //computer win block
    else {
        computerScore++;
        console.log(
            `You lose this round. ${computerChoice} beats ${humanChoice}!`
        );
        roundOver();
    }
}

function gameWin() {
    // print winner based on score, or neither if tie.
    if (roundCounter >= 5 && humanScore > computerScore) {
        console.log("You Win! You have: " + humanScore + " points!");
    } else if (roundCounter >= 5 && humanScore === computerScore) {
        console.log("Neither won the game! It's a tie!");
    } else {
        console.log(
            "You lose! The CPU wins! CPU has: " + computerScore + " points!"
        );
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
}
//start game
playGame();
