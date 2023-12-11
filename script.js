var contadorPlayer = 0;
var contadorComputer = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      console.log("Computer: Rock");
      return "Rock";
      break;
    case 2:
      console.log("Computer: Paper");
      return "Paper";
      break;
    case 3:
      console.log("Computer: Scissors");
      return "Scissors";
      break;
    default:
      return null;
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "Rock":
          return "It's a tie";
          break;
        case "Paper":
          contadorComputer = contadorComputer + 1;
          return "Computer wins, Paper beats Rock";
          break;
        case "Scissors":
          contadorPlayer = contadorPlayer + 1;
          return "Player wins, Rock beats Scissors";
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "Rock":
          contadorPlayer = contadorPlayer + 1;
          return "Player wins, Paper beats Rock";
          break;
        case "Paper":
          return "It's a tie";
          break;
        case "Scissors":
          contadorComputer = contadorComputer + 1;
          return "Computer wins, Scissors beats Paper";
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "Rock":
          contadorComputer = contadorComputer + 1;
          return "Computer wins, Rock beats Scissors";
          break;
        case "Paper":
          contadorPlayer = contadorPlayer + 1;
          return "Player wins, Scissors beats Paper";
          break;
        case "Scissors":
          return "It's a tie";
          break;
      }
      break;
    default:
      return null;
  }
}

function game() {
  while (contadorPlayer < 5 && contadorComputer < 5) {
    const playerSelection = prompt("Enter your selection").toLowerCase();
    const computerSelection = getComputerChoice();

    if (playerSelection !== null) {
      round = playRound(playerSelection, computerSelection);

      while (round === "It's a tie") {
        console.log(round);
        const playerSelection = prompt(
          "It was a tie, enter your selection again"
        ).toLowerCase();
        const computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);
      }

      console.log(round);
      console.log("Player: " + contadorPlayer)
      console.log("Computer: " + contadorComputer)
    }
  }

  if (contadorComputer === 5) {
    console.log("Computer wins");
  } else if (contadorPlayer === 5) {
    console.log("Player wins");
  }
}

game()