//global variables to keep track of the score for the human and computer.
humanScore = 0;
computerScore = 0;

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

//getHumanChoice
function getHumanChoice() {
  userInput = prompt("Enter rock, paper or scissors").toLowerCase();
  //run loop until user inputs a valid choice.
  while (userInput != "rock" && userInput != "paper" && userInput != "scissors")
    userInput = prompt("Enter rock, paper or scissors").toLowerCase();

  return userInput;
}
console.log(getHumanChoice());
