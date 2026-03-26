console.log("Hello World");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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
      computerScore++;
    } else if (
      lowercaseHumanChoice === "rock" &&
      ComputerChoice === "scissors"
    ) {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (lowercaseHumanChoice === "paper" && ComputerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (
      lowercaseHumanChoice === "paper" &&
      ComputerChoice === "scissors"
    ) {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if (
      lowercaseHumanChoice === "scissors" &&
      ComputerChoice === "paper"
    ) {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (
      lowercaseHumanChoice === "scissors" &&
      ComputerChoice === "rock"
    ) {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
  }

  // for (i = 0; i < 5; i++) {
  //   playRound(getHumanChoice(), getComputerChoice());
  // }
  // console.log(humanScore);
  // console.log(computerScore);

  const choices = document.querySelector(".btn-choices");
  choices.addEventListener("click", (event) => {
    if (event.target.id === "rock-btn") {
      playRound("rock", getComputerChoice());
    } else if (event.target.id === "paper-btn") {
      playRound("paper", getComputerChoice());
    } else {
      playRound("scissors", getComputerChoice());
    }
  });

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("Sorry, you losee!");
  }
}

playGame();
