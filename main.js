const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoices = [rock, paper, scissors];
const computerChoices = ["Rock", "Paper", "Scissors"];

let playerWins = 0;
let computerWins = 0;

playerChoices.forEach((option) => {
  option.addEventListener("click", function () {
    if (playerWins < 3 && computerWins < 3) {
      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerChoices[choiceNumber];
      gameStart(this.innerText, computerChoice);
    }
  });
});

function gameStart(player, computer) {
  const result = document.querySelector(".result");
   if (player === computer) {
    result.textContent = "Tie";
  } else if (player === "Rock") {
    if (computer === "Paper") {
      computerWins++;
      result.textContent = "Computer won this round";
    } else {
      playerWins++;
      result.textContent = "Player won this round";
    }
  } else if (player === "Paper") {
    if (computer === "Scissors") {
      computerWins++;
      result.textContent = "Computer won this round";
    } else {
      playerWins++;
      result.textContent = "Player won this round";
    }
  } else if (player === "Scissors") {
    if (computer === "Rock") {
      computerWins++;
      result.textContent = "Computer won this round";
    } else {
      playerWins++;
      result.textContent = "Player won this round";
    }
  }
  while (playerWins < 3 && computerWins < 3) {
    if (computerWins === 3) {
      result.textContent = "Computer won three times.";
    } else if (playerWins === 3) {
      result.textContent = "Player won three times.";
    }
  }
}
gameStart(player, computer);
