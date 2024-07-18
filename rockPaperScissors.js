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
    // and for each one we add a 'click' listener
    //omg you fucking idiot.
    //your button is supposed to call playRound()
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        userInput += button.id;
    });
});

function getHumanChoice() {
    return userInput;
}

function roundOver() {
    if (roundCounter < 5) {
        //update roundCounter after every round.
        roundCounter++;
        playRound(getHumanChoice(), getComputerChoice());
    } else {
        gameWin();
    }
}
// div to display results from playRound
const resultDiv = document.createElement("div");
resultDiv.classList.add("resultDiv");
resultDiv.textContent = "results";
container.appendChild(resultDiv);

function playRound(humanChoice, computerChoice) {
    // display results using DOM methods
    const content = document.createElement("div");
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
        content.textContent = `You win this round! ${btn.id} beats ${computerChoice}.`;
        resultDiv.append(content);
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
