function game() {
  for (var i = 0; i < 5; i++) {
    var playerSelection = window.prompt("ROCK PAPER SCISSORS??", "your choice");
    var computerSelection = Play();
    function Play() {
      var min = 1;
      var max = 4;

      var ran = Math.floor(Math.random() * (+max - +min) + +min);
      switch (ran) {
        case 1:
          return "Rock";
        case 2:
          return "Paper";
        case 3:
          return "Scissors";
      }
    }

    function playRound(playerSelection, computerSelection) {
      var pl = playerSelection.toLowerCase();
      var co = computerSelection.toLowerCase();

      var stc = "You lose! " + co + " beats " + pl;
      var stp = "You win! " + playerSelection + " beats " + computerSelection;
      if (pl == co) {
        return "We have a tie!";
      }
      switch (co) {
        case "rock": {
          if (pl == "paper") {
            return stp;
          } else return stc;
        }
        case "paper": {
          if (pl == "scissors") {
            return stp;
          } else return stc;
        }
        case "scissors": {
          if (pl == "rock") {
            return stp;
          } else return stc;
        }
      }
    }
    console.log(playRound(playerSelection, computerSelection) + "\n");
  }
}
game();
