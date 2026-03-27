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

//Not needed anymore
// function getHumanChoice() {
//   let humanChoice = prompt("Choose rock, paper or scissors");
//   if (humanChoice === "rock") {
//     console.log("Human chose rock");
//   } else if (humanChoice === "paper") {
//     console.log("Human chose paper");
//   } else {
//     console.log("Human chose scissors");
//   }
//   return humanChoice;
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let gameActive = true;

  function playRound(humanChoice, ComputerChoice) {
    let lowercaseHumanChoice = humanChoice.toLowerCase();
    const roundResult = document.querySelector("#round-result");

    if (gameActive === false) {
      return;
    }

    if (
      (lowercaseHumanChoice === "rock" && ComputerChoice === "rock") ||
      (lowercaseHumanChoice === "paper" && ComputerChoice === "paper") ||
      (lowercaseHumanChoice === "scissors" && ComputerChoice === "scissors")
    ) {
      roundResult.textContent = "Draw!!!";
    } else if (lowercaseHumanChoice === "rock" && ComputerChoice === "paper") {
      roundResult.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else if (
      lowercaseHumanChoice === "rock" &&
      ComputerChoice === "scissors"
    ) {
      roundResult.textContent = "You win! Rock beats Scissors";
      humanScore++;
    } else if (lowercaseHumanChoice === "paper" && ComputerChoice === "rock") {
      roundResult.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else if (
      lowercaseHumanChoice === "paper" &&
      ComputerChoice === "scissors"
    ) {
      roundResult.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    } else if (
      lowercaseHumanChoice === "scissors" &&
      ComputerChoice === "paper"
    ) {
      roundResult.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else if (
      lowercaseHumanChoice === "scissors" &&
      ComputerChoice === "rock"
    ) {
      roundResult.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    }
    updateScoreDisplay();

    if (humanScore > 4 || computerScore > 4) {
      announceWinner(humanScore, computerScore);
      gameActive = false;
    }
  }

  function updateScoreDisplay() {
    let humanScoreRef = document.querySelector("#humanScore");
    let compScoreRef = document.querySelector("#compScore");
    humanScoreRef.textContent = "Human's score:" + humanScore;
    compScoreRef.textContent = "Comp's score:" + computerScore;
  }

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
}

function announceWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    const gameResult = document.querySelector("#game-result");
    gameResult.textContent = "You win the game!";
  } else {
    const gameResult = document.querySelector("#game-result");
    gameResult.textContent = "Sorry, you losee!";
  }
}

playGame();
