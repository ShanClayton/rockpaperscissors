// caching (storing for future use) the DOM. (1)
let userScore = 0;
let computerScore = 0;
// DOM _ variables span and div to tell these are in span/div tags
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// create a function where when a user clicks on their choice computer randomizes. (3)
function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()* 3);
  return choices [randomNumber];
}

//create function to display the message Rock, Scissors, or Paper when declaring what won (6)
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//create functions for win, lose, tie with messages (5)
function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!😎 `;
  userChoice_div.classList.add("redviolet-glow");
  //timeout for border glow color to reset back to white
  setTimeout(() => userChoice_div.classList.remove("redviolet-glow"), 400);
}


function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost!😔 `;
  userChoice_div.classList.add("purple-glow");
  //timeout for border glow color to reset back to white
  setTimeout(()=> userChoice_div.classList.remove("purple-glow"), 400);
}

function tie(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord}. It's a tie game!😮 `;
  userChoice_div.classList.add("grey-glow");
  //timeout for border glow color to reset back to white
  setTimeout(() =>userChoice_div.classList.remove("grey-glow"), 400);
}
// Math.random gives you a random number between 0 and 1 if you want it never reach a certain number * by desired number. Math floor produces whole numbers (4)

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        tie(userChoice, computerChoice);
        break;
  }
}

//using a switch statement is just like an if statement but they make things easier in some cases.
//break is to stop the swtich from running

//add event listeners to each div and add function so that when each is clicked (2)
function main() {
  rock_div.addEventListener('click',() => game("r"));
  paper_div.addEventListener('click',() => game("p"));
  scissors_div.addEventListener('click',()=> game("s"));
}

main();
