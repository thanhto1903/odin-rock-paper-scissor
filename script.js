console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  //   console.log(randomInt); For test return randomInt
  if (randomInt === 0) {
    console.log("rock");
  } else if (randomInt === 1) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  let humanChoiceInt;
  console.log(humanChoice);
  if (humanChoice === "rock") {
    humanChoiceInt = 0;
    console.log("Human chose rock");
  } else if (humanChoice === "paper") {
    humanChoiceInt = 1;
    console.log("Human chose paper");
  } else {
    humanChoiceInt = 2;
    console.log("Human chose scissors");
  }
}

function playRound(humanChoice, ComputerChoice) {
  let lowercaseHumanChoice = humanChoice.toLowerCase();
  if (
    (lowercaseHumanChoice === "rock" && ComputerChoice === "rock") ||
    (lowercaseHumanChoice === "paper" && ComputerChoice === "paper") ||
    (lowercaseHumanChoice === "scissors" && ComputerChoice === "scissors")
  ) {
    console.log("Draw!!!");
  } else if (lowercaseHumanChoice === "rock" && ComputerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (lowercaseHumanChoice === "rock" && ComputerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (lowercaseHumanChoice === "paper" && ComputerChoice === "rock") {
    console.log("You win! Paper beats Rock");
  } else if (
    lowercaseHumanChoice === "paper" &&
    ComputerChoice === "scissors"
  ) {
    console.log("You lose! Scissors beats Paper");
  } else if (
    lowercaseHumanChoice === "scissors" &&
    ComputerChoice === "paper"
  ) {
    console.log("You win! Scissors beats Paper");
  } else if (lowercaseHumanChoice === "scissors" && ComputerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
  }
}

const humanSelection = "SCissors";
const computerSelection = "scissors";

playRound(humanSelection, computerSelection);
