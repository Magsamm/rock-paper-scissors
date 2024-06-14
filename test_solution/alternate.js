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

//playRound()
//refactor to use switch statements here too?
function playRound(humanChoice, computerChoice) {
  //tie logic
  switch ((humanChoice = computerChoice)) {
    case "rock":
      console.log("Its a tie!");
      return;
    case "paper":
      console.log("Its a tie!");
      return;
    case "scissors":
      console.log("Its a tie!");
      return;
  }
  //human win logic

  return humanChoice, computerChoice;
}
//call functions to play 1 round.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("human " + humanSelection);
console.log("computer  " + computerSelection);
console.log("Human score" + ": " + humanScore);
console.log("computer score" + ": " + computerScore);
