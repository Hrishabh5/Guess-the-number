let submit = document.getElementById("submit");
let input = document.getElementById("input");
let log = document.getElementById("para");
let player1Result = document.getElementById("player1Result");
let player2Result = document.getElementById("player2Result");
let finalResult = document.getElementById("finalResult");
let start = document.getElementById("start");
let player = document.getElementById("player");
let player1Value;
let player2Value;

let player1 = prompt("PLAYER 1: ");
console.log(player1);
let player2 = prompt("PLAYER 2: ");

const systemTossNumber = Math.floor(Math.random(0, 1) * 2);
let systemToss = "Tails";
if (systemTossNumber === 0) {
  systemToss = "tails";
} else {
  systemToss = "heads";
}

let toss = prompt("Toss: (Tails or Heads)");
let firstPlayer = player1;
let secondPlayer = player2;

if (toss.toLowerCase() === systemToss) {
  alert(`Congratulations! ${player1} won the toss.`);
  firstPlayer = player1;
  secondPlayer = player2;
  player.innerHTML = `${firstPlayer} is playing!`;
} else {
  alert(`Oops! ${player1} lost the toss.`);
  firstPlayer = player2;
  secondPlayer = player1;
  player.innerHTML = `${firstPlayer} is playing!`;
}

let round = 1;
let firstPlayerCount = 0;
let secondPlayerCount = 0;

const winner = (firstPlayerCount, secondPlayerCount) => {
  player.innerHTML = "Reload the page to restart the game!";
  if (secondPlayerCount > firstPlayerCount) {
    finalResult.innerHTML = `${firstPlayer} won!`;
  } else if (secondPlayerCount < firstPlayerCount) {
    finalResult.innerHTML = `${secondPlayer} won!`;
  } else {
    finalResult.innerHTML = "Tie!";
  }
};

const number1 = Math.floor(Math.random(0, 1) * 100);
const number2 = Math.floor(Math.random(0, 1) * 100);

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (round === 1) {
    player1Value = input.value;
    if (number1 > player1Value) {
      firstPlayerCount++;
      input.value = "";
      log.innerHTML = "Number is greater than the chosen one!";
    } else if (number1 < player1Value) {
      firstPlayerCount++;
      input.value = "";
      log.innerHTML = "Number is smaller than the chosen one!";
    } else {
      round++;
      firstPlayerCount++;
      input.value = "";
      log.innerHTML = "You got it right!";
      player1Result.innerHTML = `${firstPlayer}: ${firstPlayerCount}`;
      player.innerHTML = `${secondPlayer} is playing!`;
    }
  } else if (round === 2) {
    player2Value = input.value;
    if (number2 > player2Value) {
      secondPlayerCount++;
      input.value = "";
      log.innerHTML = "Number is greater than the chosen one!";
    } else if (number2 < player2Value) {
      secondPlayerCount++;
      input.value = "";
      log.innerHTML = "Number is smaller than the chosen one!";
    } else {
      round++;
      secondPlayerCount++;
      input.value = "";
      player2Result.innerHTML = `${secondPlayer}: ${secondPlayerCount}`;
      log.innerHTML = "You got it right!";
      if (round === 3) {
        log.innerHTML = "";
        winner(firstPlayerCount, secondPlayerCount);
      }
    }
  }
});
