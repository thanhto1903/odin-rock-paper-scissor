console.log("Hello World");

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
