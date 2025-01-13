const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoices = [rock, paper, scissors];
const computerChoices = ["Rock", "Paper", "Scissors"];

playerChoices.forEach((option) => {
  option.addEventListener("click", function () {
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[choiceNumber];
    gameStart(this.innerText, computerChoice);
  });
});
const gameStart = (player, computer) => {
  const result = document.querySelector(".result");
  if (player === computer) {
    result.textContent = "Tie";
  } else if (player == "Rock") {
    if (computer == "Paper") {
      result.textContent = "Computer won";
    } else {
      result.textContent = "Player won";
    }
  } else if (player == "Paper") {
    if (computer == "Scissors") {
      result.textContent = "Computer won";
    } else {
      result.textContent = "Player won";
    }
  } else if (player == "Scissors") {
    if (computer == "Rock") {
      result.textContent = "Computer won";
    } else {
      result.textContent = "Player won";
    }
  }
};
gameStart();
