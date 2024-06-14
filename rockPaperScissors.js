//global variables to keep track of the score for the human and computer.
let humanScore = 0;
let computerScore = 0;

//gets a random int and adds rock paper or scissors to an empty string and returns it
//depending on the number it returns, from 0-2
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
  userInput = window.prompt("Enter rock, paper or scissors");
  //run loop until user inputs a valid choice.
  while (userInput != "rock" && userInput != "paper" && userInput != "scissors")
    userInput = window.prompt("Error! Please enter rock, paper or scissors.");
  return userInput.toLowerCase();
}

//refactor to use switch statements here too?
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");

    // human win logic.
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }

  //computer score block, definitely needs refactoring
  else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
    return;
  }
}
//call functions to play 1 round.
function playGame(humanChoice, computerChoice) {
  playRound(humanChoice, computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playGame(humanSelection, computerSelection);
console.log("Human :" + humanSelection);
console.log("computer :" + computerSelection);
console.log("Human score" + ": " + humanScore);
console.log("computer score" + ": " + computerScore);
