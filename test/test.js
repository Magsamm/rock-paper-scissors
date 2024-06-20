//global variables to keep track of the score for the human and computer.
//gets a random int and adds rock paper or scissors to an empty string and returns it
//depending on the number it returns, from 0-2
let humanScore = 0;
let computerScore = 0;
let round = 0;
//store human and computer selections in a const
const humanSelection = getHumanSelection();
const computerSelection = getComputerSelection();

function getComputerSelection() {
  //store rock paper or scissors in empty string based on randomInt return value
  let computerSelection = "";
  //gets random int from 0-2.
  let randomInt = Math.floor(Math.random() * 3);
  //take number and add a string based on random number.
  switch (randomInt) {
    case (randomInt = 0):
      computerSelection += "rock";
      break;

    case (randomInt = 1):
      computerSelection += "paper";
      break;

    case (randomInt = 2):
      computerSelection += "scissors";
      break;
  }
  return computerSelection;
}

//getHumanSelection prompts user for valid input.
function getHumanSelection() {
  //declare  userInput;
  let userInput = "";
  userInput = window.prompt("Enter rock, paper or scissors");
  //run loop until user inputs a valid choice.
  while (
    userInput != "rock" &&
    userInput != "paper" &&
    userInput != "scissors"
  ) {
    userInput = window.prompt("Error! Please enter rock, paper or scissors.");
  }

  return userInput.toLowerCase();
}

//kjør playRound
//check round win
//increment score and or round counter.
function playGame() {
  //kall funksjonene og sjekk win conditions?
  let tie = 0;

  function playRound() {
    //tie logic
    if (humanSelection === computerSelection) {
      console.log("This round is a tie!");
      tie += 1;
      round++;

      // human win logic.
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log(
        `You win this round! ${humanSelection} beats ${computerSelection}.`
      );
      round++;
      humanScore++;
    }
    //computer win block
    else {
      console.log(
        `You lose this round. ${computerSelection} beats ${humanSelection}!`
      );
      computerScore++;
      round++;
    }
  }
  playRound();
}

//ha separate funksjoner for win round vs win game?
//if tie > 0, new round?
playGame();
