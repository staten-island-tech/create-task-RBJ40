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
function gameStart(player, computer) {
  const result = document.querySelector(".result");
  let wins = 0;
  while (wins < 3) {
    if (player === computer) {
      result.textContent = "Tie";
    } else if (player == "Rock") {
      if (computer == "Paper") {
        result.textContent = "Computer won";
      } else {
        result.textContent = "Player won";
        wins++;
      }
    } else if (player == "Paper") {
      if (computer == "Scissors") {
        result.textContent = "Computer won";
      } else {
        result.textContent = "Player won";
        wins++;
      }
    } else if (player == "Scissors") {
      if (computer == "Rock") {
        result.textContent = "Computer won";
      } else {
        result.textContent = "Player won";
        wins++;
      }
      if (computer.wins == 3) {
        result.textContent = "Computer won three times";
      } else if (player.wins == 3) {
        result.textContent = "Player won three times";
      }
    }
  }
}
gameStart();
