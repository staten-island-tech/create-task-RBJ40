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
//remember to put what wins and loses over what
function whoOpponent() {
  let userInput = prompt("Do you want to play against a bot? y or n");
  if (userInput === "y") {
    console.log("Okay.");
  } else {
    console.log("Players get ready.");
  }
}
whoOpponent();
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
function winner() {
  if (userInput2 )
}
