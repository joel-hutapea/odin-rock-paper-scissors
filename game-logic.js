let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function getComputerChoice() {
    const choice = Math.random();
    if (choice > (2/3)) {
        return "rock";
    } else if (choice > (1/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    choice = choice.toLowerCase();
    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return choice;
    } else {
        console.log("invalid choice")
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == null) {
        return;
    }

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("You draw!");
                    return;

                case "paper":
                    console.log("You lose! Paper beats Rock");
                    computerScore += 1;
                    return;

                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    humanScore += 1;
                    return;
            }
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock");
                    humanScore += 1;
                    return;

                case "paper":
                    console.log("You draw!");
                    return;

                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    computerScore += 1;
                    return;
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    computerScore += 1;
                    return;

                case "paper":
                    console.log("You win! Scissors beats Paper");
                    humanScore += 1;
                    return;

                case "scissors":
                    console.log("You draw!");
                    return;
            }
    }
}