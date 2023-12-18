let playerScore = 0;
let computerScore = 0;

botones = document.querySelectorAll("button");
restartButton = document.querySelector(".playAgain");

botones.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

restartButton.addEventListener("click", function () {
  restartGame();
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";
  resultScore = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore = playerScore + 1;
    result = "You win! " + playerSelection + " beats " + computerSelection;

    if (playerScore === 5) {
      result = "Player won the game!";
      disableButtons();
    }
  } else if (playerSelection == computerSelection) {
    result = "It's a tie. You both chose " + playerSelection;
  } else {
    computerScore = computerScore + 1;
    result = "You lose! " + computerSelection + " beats " + playerSelection;

    if (computerScore === 5) {
      result = "Computer won the game!";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  document.querySelector(".playerScore").innerHTML = playerScore;
  document.querySelector(".computerScore").innerHTML = computerScore;
  return;
}

function disableButtons() {
  botones.forEach((elem) => {
    elem.disabled = true;
  });
}

restartGame = () => {
  playerScore = 0;
  computerScore = 0;
  botones.forEach((elem) => {
    elem.disabled = false;
  });
  result = "";
  document.getElementById("result").innerHTML = result;
  document.querySelector(".playerScore").innerHTML = playerScore;
  document.querySelector(".computerScore").innerHTML = computerScore;
};
