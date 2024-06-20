//global variables to keep track of the score for the human and computer.
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

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

//round win function that starts a new round if all conditions are met AND roundCounter < 5.
//start new round and get new choices... hmmm
function roundOver() {
    if (roundCounter < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    } else {
        gameWin();
    }
    //call gameWin once counter reaches 5?
}

//they want you to recall both choice function, humanSelection and computerSelection between rounds.
//while
function playRound(humanChoice, computerChoice) {
    //tie logic
    //check if roundCounter < 5?
    if (humanChoice === computerChoice) {
        roundCounter++;
        console.log("This round is a tie!");

        roundOver();

        // human win logic.
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundCounter++;
        console.log(
            `You win this round! ${humanChoice} beats ${computerChoice}.`
        );
        roundOver();
    }

    //computer win block
    else {
        computerScore++;
        roundCounter++;
        console.log(
            `You lose this round. ${computerChoice} beats ${humanChoice}!`
        );
        roundOver();
    }
}

function gameWin() {
    // if roundCounter >= 5 AND humanScore is higher than computerScore, game over,  present winner.
    //need to break out of game loop somehow.
    //or just call this function once roundCounter reaches >=5?
    if (roundCounter >= 5 && humanScore > computerScore) {
        console.log("You Win! You have: " + humanScore + " points!");
    } else if (roundCounter >= 5 && computerScore > humanScore) {
        console.log(
            "You lose! The CPU wins! CPU has: " + computerScore + " points!"
        );
    }
}

function playGame() {
    //if gameWin or roundWin = true?
    // roundWin();
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();
//call roundWin
//call playGame
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);
console.log("roundCounter " + roundCounter);

// function to call playGame 5 times
