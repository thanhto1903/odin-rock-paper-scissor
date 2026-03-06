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

getHumanChoice();
