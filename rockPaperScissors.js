//global variables to keep track of the score for the human and computer.
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
const container = document.querySelector("#container");
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
const buttons = document.querySelectorAll("button");
let userInput = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        userInput += button.id;
    });
});

function roundOver() {
    if (roundCounter < 5) {
        //update roundCounter after every round.
        roundCounter++;
    } else {
        gameWin();
    }
}
// div to display results from playRound
const content = document.createElement("div");

function playRound(humanChoice, computerChoice) {
    // display results using DOM methods
    if (humanChoice === computerChoice) {
        content.textContent = `It's a tie! You have: ${humanScore} points! And the computer has ${computerScore} points!`;

        roundOver();

        // human win logic.
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        content.textContent = `You win this round! ${humanChoice} beats ${computerChoice}. You have: ${humanScore} points! And the computer has ${computerScore} points!`;
        roundOver();
    }

    //computer win block
    else {
        computerScore++;

        content.textContent = `You lose this round. ${computerChoice} beats ${humanChoice}! You have ${humanScore} points! The computer has ${computerScore} points!`;
        roundOver();
    }
}

function gameWin() {
    // print winner based on score, or neither if tie.
    if (roundCounter >= 5 && humanScore > computerScore) {
        content.textContent =
            "You won the game! You have: " + humanScore + " points!";
    } else if (roundCounter >= 5 && humanScore === computerScore) {
        content.textContent = "Neither won the game, it's a draw!";
    } else {
        content.textContent =
            "You lose the game! The CPU wins! CPU has: " +
            computerScore +
            " points!";
    }
}
//append content to container to display results.
container.append(content);
