console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  //   console.log(randomInt); For test return randomInt
  if (randomInt === 0) {
    console.log("Comp chose rock");
    return "rock";
  } else if (randomInt === 1) {
    console.log("Comp chose paper");
    return "paper";
  } else {
    console.log("Comp chose scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  if (humanChoice === "rock") {
    console.log("Human chose rock");
  } else if (humanChoice === "paper") {
    console.log("Human chose paper");
  } else {
    console.log("Human chose scissors");
  }
  return humanChoice;
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
