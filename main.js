const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("ul"),
  button: document.querySelectorAll("button"),
  form: document.querySelectorAll(".form"),
  container: document.querySelectorAll(".container"),
  card: document.querySelector(".card"),
};

const choices = ["Rock", "Paper", "Scissors"];

const winner = (player, computer) => {
  const result = document.querySelector(".result");
  const playerScoreBoard = document.querySelector(".p-count");
  const computerScoreBoard = document.querySelector(".c-count");
  /* player = player.toLowerCase();
  computer = computer.toLowerCase(); placeholder. may delete*/
  if (player === computer) {
    result.textContent = "Tie";
  } else if (player == "Rock") {
    if (computer == "Paper") {
      result.textContent = "Computer Won";
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "Paper") {
    if (computer == "Scissors") {
      result.textContent = "Computer Won";
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "Scissors") {
    if (computer == "Rock") {
      result.textContent = "Computer Won";
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScoreBoard.textContent = playerScore;
    }
  }
};
DOMSelectors.button.addEventListener("click", function () {
  console.log("Let's go");
});

function oneMove() {
  let userInput2 = prompt("Rock, Paper, or Scissors?");
}
oneMove();
function twoMove() {
  let userinput3 = prompt("Rock, Paper, or Scissors?");
}
