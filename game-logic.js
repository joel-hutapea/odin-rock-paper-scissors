const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const messages = document.querySelector("#messages");
const humanScoreContainer = document.querySelector("#human-score");
const computerScoreContainer = document.querySelector("#computer-score");
const winnerContainer = document.querySelector("#winner");

computerScoreContainer.style.marginBottom = "16px";
messages.style.marginTop = "16px";

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    checkWinner();
})

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    checkWinner();
})

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    checkWinner();
})

function getComputerChoice() {
    const choice = Math.random();
    if (choice > (2 / 3)) {
        return "rock";
    } else if (choice > (1 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        messages.textContent = `You draw! ${humanChoice} equals ${computerChoice}`
    } else if 
        ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) 
    {
        messages.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
}

function checkWinner() {
    humanScoreContainer.textContent = `Human score: ${humanScore}`;
    computerScoreContainer.textContent = `Computer score: ${computerScore}`;

    if (humanScore === 5) {
        winner.textContent = "You are victorious!";
    } else if (computerScore === 5) {
        winner.textContent = "Computer is victorious!"
    }

    if (humanScore === 5 || computerScore === 5) {
        rockButton.style.display = "none";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
    }
}