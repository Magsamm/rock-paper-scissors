//global variables to keep track of the score for the human and computer.
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
const container = document.querySelector("#container");
const buttons = document.querySelectorAll("button");
const rock = document.createElement("button");
rock.textContent = "Rock";
rock.setAttribute("id", "rock");
container.appendChild(rock);
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.setAttribute("id", "paper");
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.textContent = "Scissors";
container.appendChild(scissors);

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
//refactor to use button instead of prompt
//getHumanChoice prompts user for valid input.
function getHumanChoice() {
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        //omg you fucking idiot.
        //your button is supposed to call playround()
        button.addEventListener("click", () => {
            let userSelection = "";
            if (button.id === "rock") {
                userSelection += "rock";
            } else if (button.id === "paper") {
                userSelection += "paper";
            } else {
                userSelection += "scissors";
            }

            return userSelection;
        });
    });
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
    const btn = document.querySelector("button");
    if (btn.id === computerChoice) {
        console.log("This round is a tie!");

        //roundOver();

        // human win logic.
    } else if (
        (btn.id === "rock" && computerChoice === "scissors") ||
        (btn.id === "paper" && computerChoice === "rock") ||
        (btn.id === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win this round! ${btn.id} beats ${computerChoice}.`);
        //roundOver();
    }

    //computer win block
    else {
        computerScore++;
        console.log(`You lose this round. ${computerChoice} beats ${btn.id}!`);
        //roundOver();
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
            "You lose the game! The CPU wins! CPU has: " +
                computerScore +
                " points!"
        );
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
}

//start game
playGame();
