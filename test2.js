const container = document.querySelector("#container");
const Buttons = document.createElement("div");
Buttons.classList.add("Buttons");
Buttons.style.justifyItems = "space-around";
container.appendChild(Buttons);

for (var i = 1; i < 4; i++) {
  const button = document.createElement("button");
  button.id = i.toString();
  var list = ["Rock", "Paper", "Scissors"];
  button.innerText = list[i - 1];
  button.addEventListener("click", e => {
    getResult(playRound(list[Number(button.id) - 1], Play()));
  });
  button.style.cssText = "border-radius: 10px;";
  container.appendChild(button);
}
const Result = document.createElement("div");
Result.classList.add("Result");

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
function getResult(result) {
  Result.innerText = result;
  Result.style.cssText = "text-align: center; padding: 170px 170 px;";
  container.appendChild(Result);
}
