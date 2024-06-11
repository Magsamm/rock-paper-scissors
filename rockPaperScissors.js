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
  userInput = prompt("Enter rock, paper or scissors")
  //run loop until user inputs a valid choice.
  while (userInput != "rock" && userInput != "paper" && userInput != "scissors")
    userInput = prompt("Error! Please enter rock, paper or scissors.")
  return userInput.toLowerCase();
}

//playRound()
function playRound(humanChoice, computerChoice) {
  //playRound logic goes here.
  //take human and computer choices and play round.
  //increment the winner's score
  //announce winner with console.log()
  //maybe increment human if won, otherwise increment computerScore?
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") { 
    humanScore++;
  }
//computer score block, definitely needs refactoring
  if (computerChoice === "rock" && humanChoice === "scissors") {
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
  }
  return;
}
//console log the winner
//if computerScore < humanScore, print humanSelection as winner,
//else print computer as winner?
//remember to also have logic for tie.
// ${humanSelection} to plug value into the console.log()
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("Human score" + ": " + humanScore);
console.log("computer score" + ": " + computerScore);


