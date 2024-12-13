const choices = ["Rock", "Paper", "Scissors"];

function whoOpponent() {
  let userInput = prompt("Do you want to play against a bot? y or n");
  if (userInput === "y") {
    console.log("Okay.");
  } else {
    console.log("Players get ready.");
  }
}
whoOpponent();
