/** @format */

const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice1;
let computerChoice1;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice1 = e.target.id;
    userChoice.innerHTML = userChoice1;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice1 = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice1 = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice1 = "Paper";
  }

  computerChoice.innerHTML = computerChoice1;
}

function getResult() {
  if (computerChoice1 === userChoice1) {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-info");
    result = "It's a draw!";
  } else if (computerChoice1 === "Rock" && userChoice1 === "Paper") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-success");
    result = "You Win!";
  } else if (computerChoice1 === "Paper" && userChoice1 === "Paper") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-success");
    result = "You Win!";
  } else if (computerChoice1 === "Scissors" && userChoice1 === "Rock") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-success");
    result = "You Win!";
  } else if (computerChoice1 === "Rock" && userChoice1 === "Scissors") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-danger");
    result = "You Lost!";
  } else if (computerChoice1 === "Paper" && userChoice1 === "Rock") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-danger");
    result = "You Lost!";
  } else if (computerChoice1 === "Scissors" && userChoice1 === "Paper") {
    resultDisplay.classList.remove("text-danger", "text-info", "text-success");
    resultDisplay.classList.add("text-danger");
    result = "You Lost!";
  }

  resultDisplay.innerHTML = result;
}
