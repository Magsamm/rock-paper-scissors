//global variables to keep track of the score for the human and computer.
//gets a random int and adds rock paper or scissors to an empty string and returns it
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
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

//put playRound inside playGame.
function playGame(humanChoice, computerChoice) {
  //maybe i need to rework my humanChoice function for easier ways to reprompt?
  //Re-work your previous functions or create more helper functions if necessary.
  //Specifically, you may want to change the return values to something more useful.
  function playRound(humanChoice, computerChoice) {
    //tie logic
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

    //computer win block
    else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    return;
  }
  //call playRound
  playRound(humanChoice, computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playGame(humanSelection, computerSelection);
//log to see stuff is working
console.log("Human :" + humanSelection);
console.log("computer :" + computerSelection);
console.log("Human score" + ": " + humanScore);
console.log("computer score" + ": " + computerScore);
